using System.Collections.Generic;
using TypeLite;

namespace Angular.Structure.Service.ViewModels
{
    /// <summary>
    /// Kendo Paged Results
    /// </summary>
    /// <typeparam name="T"></typeparam>
    [TsClass]
    public class KendoPagedResults<T>
    {
        /// <summary>
        /// Gets or sets the data.
        /// </summary>
        /// <value>
        /// The data.
        /// </value>
        public List<T> Data { get; set; }
        /// <summary>
        /// Gets or sets the total.
        /// </summary>
        /// <value>
        /// The total.
        /// </value>
        public int Total { get; set; }
    }
}