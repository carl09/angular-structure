using System.Net;
using System.Web;
using System.Web.Optimization;

namespace Angular.Structure
{
    public class Global : HttpApplication
    {
        protected void Application_Start()
        {
            //MvcHandler.DisableMvcResponseHeader = true;
            BundleConfig.RegisterBundles(BundleTable.Bundles);
            Service.WebApiConfig.Register();
            ServicePointManager.DefaultConnectionLimit = 256;
        }
    }
}