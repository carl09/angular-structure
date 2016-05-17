using System.ComponentModel.DataAnnotations;
using TypeLite;

namespace Angular.Structure.Service.ViewModels
{
    /// <summary>
    /// Student List Item
    /// </summary>
    [TsClass]
    public class StudentListItem
    {
        /// <summary>
        /// Gets or sets the student identifier.
        /// </summary>
        /// <value>
        /// The student identifier.
        /// </value>
        [Required]
        public int StudentId { get; set; }
        /// <summary>
        /// Gets or sets the student code.
        /// </summary>
        /// <value>
        /// The student code.
        /// </value>
        [Required]
        public string StudentCode { get; set; }
        /// <summary>
        /// Gets or sets the first name.
        /// </summary>
        /// <value>
        /// The first name.
        /// </value>
        [Required]
        public string FirstName { get; set; }
        /// <summary>
        /// Gets or sets the last name.
        /// </summary>
        /// <value>
        /// The last name.
        /// </value>
        [Required]
        public string LastName { get; set; }
    }
}