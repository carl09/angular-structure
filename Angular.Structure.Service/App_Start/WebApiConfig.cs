using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Formatting;
using System.Web.Http;
using System.Web.Http.ExceptionHandling;
using System.Web.Http.Filters;
using System.Web.Http.Results;
using Newtonsoft.Json.Serialization;

namespace Angular.Structure.Service
{
    /// <summary>
    /// WebApiConfig
    /// </summary>
    public class WebApiConfig
    {
        /// <summary>
        /// Registers the specified configuration.
        /// </summary>
        public static void Register()
        {
            var config = GlobalConfiguration.Configuration;
            config.MapHttpAttributeRoutes();

            config.Filters.Add(new WebApiExceptionFilterAttribute());

            config.Services.Replace(typeof(IExceptionHandler), new GlobalExceptionHandler());
            config.Services.Add(typeof(IExceptionLogger), new GlobalErrorLogger());

            // Return JSON by default, unless the client requests text/xml
            var appXmlType = config.Formatters.XmlFormatter.SupportedMediaTypes.FirstOrDefault(t => t.MediaType == "application/xml");
            if (appXmlType != null)
                config.Formatters.XmlFormatter.SupportedMediaTypes.Remove(appXmlType);

            // camelcasing for json being returned
            var jsonFormatter = config.Formatters.OfType<JsonMediaTypeFormatter>().First();
            jsonFormatter.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();

            config.EnsureInitialized();
        }
    }

    /// <summary>
    /// Global Error Handler
    /// </summary>
    /// <seealso cref="System.Web.Http.Filters.ExceptionFilterAttribute" />
    public class WebApiExceptionFilterAttribute : ExceptionFilterAttribute
    {
        /// <summary>
        /// Called when [exception].
        /// </summary>
        /// <param name="context">The context.</param>
        public override void OnException(HttpActionExecutedContext context)
        {
            var exception = context.Exception;

            var httpResponseException = exception as HttpResponseException;
            if (httpResponseException == null)
            {
                var msg = "WebAPI Controller Exception";

                context.Response = context.Request.CreateResponse(HttpStatusCode.InternalServerError, new HttpError(msg));
            }

            
        }
    }

    /// <summary>
    /// Global WebApi Error Logger
    /// </summary>
    /// <seealso cref="System.Web.Http.ExceptionHandling.ExceptionLogger" />
    public class GlobalErrorLogger : ExceptionLogger
    {
        /// <summary>
        /// Logs the specified context.
        /// </summary>
        /// <param name="context">The context.</param>
        public override void Log(ExceptionLoggerContext context)
        {
            var exception = context.Exception;
        }
    }

    /// <summary>
    /// Global Web Api Exception Handler
    /// </summary>
    /// <seealso cref="System.Web.Http.ExceptionHandling.ExceptionHandler" />
    public class GlobalExceptionHandler : ExceptionHandler
    {
        /// <summary>
        /// Handles the specified context.
        /// </summary>
        /// <param name="context">The context.</param>
        public override void Handle(ExceptionHandlerContext context)
        {
            const string genericErrorMessage = " An unexpected error occured";
            var response = context.Request.CreateResponse(HttpStatusCode.InternalServerError,
                new
                {
                    Message = genericErrorMessage
                });

            context.Result = new ResponseMessageResult(response);
        }
    }
}
