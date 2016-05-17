using System.Web.Optimization;

namespace Angular.Structure
{
    public static class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/Content/css").Include(
                "~/Content/bootstrap.css",
                "~/Content/angular-toastr.css",
                "~/Content/site.css"));

            bundles.Add(new ScriptBundle("~/scripts/core").Include(
                "~/Scripts/jquery.js",
                "~/Scripts/bootstrap.js",
                "~/Scripts/angular.js",
                "~/Scripts/angular-ui-router.js",
                "~/Scripts/angular-messages.js",
                "~/Scripts/angular-toastr.js"
                ));

            bundles.Add(new ScriptBundle("~/scripts/app").Include(
                "~/app/app.js"
                )
                .IncludeDirectory("~/app/", "*.mdl.js", true)
                .IncludeDirectory("~/app/", "*.srv.js", true)
                .IncludeDirectory("~/app/", "*.drv.js", true)
                .IncludeDirectory("~/app/", "*.ctrl.js", true)
                );
        }
    }
}