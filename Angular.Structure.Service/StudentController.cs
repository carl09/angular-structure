using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Reflection;
using System.Threading;
using System.Web.Http;
using Angular.Structure.Service.ViewModels;
using Newtonsoft.Json;
using Swashbuckle.Swagger.Annotations;

namespace Angular.Structure.Service
{
    /// <summary>
    ///     Student Controller
    /// </summary>
    /// <seealso cref="System.Web.Http.ApiController" />
    [RoutePrefix("api/student")]
    public class StudentController : ApiController
    {
        /// <summary>
        ///     Gets a student by id.
        /// </summary>
        /// <param name="id">Student Id</param>
        /// <returns></returns>
        [HttpGet]
        [Route("{id}")]
        [SwaggerResponse(HttpStatusCode.OK, Type = typeof(StudentDetailItem))]
        [SwaggerResponse(HttpStatusCode.NotFound, Type = typeof(HttpError), Description = "Student Not Found")]
        [SwaggerResponse(HttpStatusCode.InternalServerError, Type = typeof(HttpError), Description = "Student Record is not Valid")]
        public HttpResponseMessage Get(int id)
        {
            var students = JsonConvert.DeserializeObject<List<StudentDetailItem>>(LoadData());

            var student = students.FirstOrDefault(x => x.StudentId == id);

            if (student == null)
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Student Not Found");
            }

            return Request.CreateResponse(HttpStatusCode.OK, student);
        }

        /// <summary>
        /// Checks if the student code is in use.
        /// </summary>
        /// <param name="id">Student Id.</param>
        /// <param name="studentCode">The student code.</param>
        /// <returns></returns>
        [HttpGet]
        [Route("checkStudentCode/{id}")]
        [SwaggerResponse(HttpStatusCode.Accepted)]
        [SwaggerResponse(HttpStatusCode.BadRequest, Type = typeof(HttpError), Description = "Student Code in Use")]
        [SwaggerResponse(HttpStatusCode.InternalServerError, Type = typeof(HttpError), Description = "Student Record is not Valid")]
        public HttpResponseMessage CheckStudentCode(int id, string studentCode)
        {
            Thread.Sleep(TimeSpan.FromSeconds(5));

            var students = JsonConvert.DeserializeObject<List<StudentDetailItem>>(LoadData());

            var inUse = students.FirstOrDefault(x => x.StudentCode == studentCode && x.StudentId != id);
            if (inUse != null)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Student Code In Use");
            }
            return Request.CreateResponse(HttpStatusCode.Accepted);
        }

        /// <summary>
        ///     Creates a Student List for Kendo.
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        [Route("kendo")]
        [SwaggerResponse(HttpStatusCode.OK, Type = typeof(KendoPagedResults<StudentListItem>))]
        [SwaggerResponse(HttpStatusCode.InternalServerError, Type = typeof(HttpError))]
        public HttpResponseMessage KendoList([FromBody] StudentCriteria critera)
        {
            var students = JsonConvert.DeserializeObject<List<StudentListItem>>(LoadData());

            if (!string.IsNullOrEmpty(critera.StudentCode))
            {
                students = students.Where(x => x.StudentCode.StartsWith(critera.StudentCode)).ToList();
            }

            if (!string.IsNullOrEmpty(critera.FirstName))
            {
                students = students.Where(x => x.FirstName.StartsWith(critera.FirstName)).ToList();
            }

            if (!string.IsNullOrEmpty(critera.LastName))
            {
                students = students.Where(x => x.LastName.StartsWith(critera.LastName)).ToList();
            }


            var sort = critera.Sort.FirstOrDefault();
            if (sort != null)
            {
                switch (sort.Field)
                {
                    case "firstName":
                        {
                            students = sort.Dir.StartsWith("a", StringComparison.CurrentCultureIgnoreCase)
                                ? students.OrderBy(x => x.FirstName).ToList()
                                : students.OrderByDescending(x => x.FirstName).ToList();
                            break;
                        }
                    case "lastName":
                        {
                            students = sort.Dir.StartsWith("a", StringComparison.CurrentCultureIgnoreCase)
                                ? students.OrderBy(x => x.LastName).ToList()
                                : students.OrderByDescending(x => x.LastName).ToList();
                            break;
                        }
                    case "studentCode":
                        {
                            students = sort.Dir.StartsWith("a", StringComparison.CurrentCultureIgnoreCase)
                                ? students.OrderBy(x => x.StudentCode).ToList()
                                : students.OrderByDescending(x => x.StudentCode).ToList();
                            break;
                        }
                    default:
                        {
                            students = sort.Dir.StartsWith("a", StringComparison.CurrentCultureIgnoreCase)
                                ? students.OrderBy(x => x.StudentCode).ToList()
                                : students.OrderByDescending(x => x.StudentCode).ToList();
                            break;
                        }
                }
            }
            return Request.CreateResponse(HttpStatusCode.OK, new KendoPagedResults<StudentListItem>
            {
                Data = students.Skip(critera.Skip).Take(critera.Take).ToList(),
                Total = students.Count
            });
        }

        private string LoadData()
        {
            var assembly = Assembly.GetExecutingAssembly();
            var resourceName = "Angular.Structure.Service.students.json";

            using (Stream stream = assembly.GetManifestResourceStream(resourceName))
            using (StreamReader reader = new StreamReader(stream))
            {
                return reader.ReadToEnd();
            }
        }
    }
}