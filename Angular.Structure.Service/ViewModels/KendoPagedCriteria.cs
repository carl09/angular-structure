using System.Collections.Generic;
using TypeLite;

namespace Angular.Structure.Service.ViewModels
{
    /// <summary>
    /// Student Search Criteria
    /// </summary>
    /// <seealso cref="KendoPagedCriteria" />
    [TsClass]
    public class StudentCriteria : KendoPagedCriteria
    {
        /// <summary>
        /// Gets or sets the student code.
        /// </summary>
        /// <value>
        /// The student code.
        /// </value>
        public string StudentCode { get; set; }
        /// <summary>
        /// Gets or sets the first name.
        /// </summary>
        /// <value>
        /// The first name.
        /// </value>
        public string FirstName { get; set; }
        /// <summary>
        /// Gets or sets the last name.
        /// </summary>
        /// <value>
        /// The last name.
        /// </value>
        public string LastName { get; set; }
    }

    /// <summary>
    /// Kendo Paged Criteria
    /// </summary>
    public class KendoPagedCriteria
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="KendoPagedCriteria"/> class.
        /// </summary>
        protected KendoPagedCriteria()
        {
            Sort = new List<KendoPagedOrderBy>();
        }

        /// <summary>
        /// Gets or sets the page.
        /// </summary>
        /// <value>
        /// The page.
        /// </value>
        [TsProperty(IsOptional = true)]
        public int Page { get; set; }
        /// <summary>
        /// Gets or sets the size of the page.
        /// </summary>
        /// <value>
        /// The size of the page.
        /// </value>
        [TsProperty(IsOptional = true)]
        public int PageSize { get; set; }
        /// <summary>
        /// Gets or sets the skip.
        /// </summary>
        /// <value>
        /// The skip.
        /// </value>
        [TsProperty(IsOptional = true)]
        public int Skip { get; set; }
        /// <summary>
        /// Gets or sets the take.
        /// </summary>
        /// <value>
        /// The take.
        /// </value>
        [TsProperty(IsOptional = true)]
        public int Take { get; set; }
        /// <summary>
        /// Gets or sets the sort.
        /// </summary>
        /// <value>
        /// The sort.
        /// </value>
        [TsProperty(IsOptional = true)]
        public List<KendoPagedOrderBy> Sort { get; set; }
    }
}