using TypeLite;

namespace Angular.Structure.Service.ViewModels
{
    /// <summary>
    /// Kendo Order By
    /// </summary>
    [TsClass]
    public class KendoPagedOrderBy
    {
        /// <summary>
        /// Gets or sets the field.
        /// </summary>
        /// <value>
        /// The field.
        /// </value>
        [TsProperty(IsOptional = true)]
        public string Field { get; set; }
        /// <summary>
        /// Gets or sets the dir.
        /// </summary>
        /// <value>
        /// The dir.
        /// </value>
        [TsProperty(IsOptional = true)]
        public string Dir { get; set; }
    }
}