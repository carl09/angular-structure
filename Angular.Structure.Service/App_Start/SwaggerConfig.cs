using System.Web.Http;
using Angular.Structure.Service;
using Swashbuckle.Application;
using WebActivatorEx;

[assembly: PreApplicationStartMethod(typeof(SwaggerConfig), "Register")]

namespace Angular.Structure.Service
{
    /// <summary>
    /// Swagger Config
    /// </summary>
    public class SwaggerConfig
    {
        /// <summary>
        /// Registers this instance.
        /// </summary>
        public static void Register()
        {
            GlobalConfiguration.Configuration
                .EnableSwagger(c =>
                {
                    c.SingleApiVersion("v1", "Demo Services");

                    c.IncludeXmlComments(string.Format(@"{0}\bin\Debug\Angular.Structure.Service.xml", System.AppDomain.CurrentDomain.BaseDirectory));
                })
                .EnableSwaggerUi(c =>
                {

                });
        }
    }
}
