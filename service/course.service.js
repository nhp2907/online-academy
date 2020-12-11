const Course = require('../models/course');

const findAll = async () => {
    const courses = await Course.findAll();
    return courses.map(c => c.toJSON());
}
const findById = (id) => {
    return {
        name: "Machine Learning A-Z™: Hands-On Python & R In Data Science",
        headline: "Learn to create Machine Learning Algorithms in Python and R from two Data Science experts. Code templates included.",
        rating: "4.5",
        numberOfReview: "136,222",
        numberOfStudentEnroll: "720,144",
        author: " Kiril Elemenko",
        createdAt: "1/1/2020",
        updatedAt: "1/1/2020",
        language: "English",
        caption_language: [
            {id: "1", name: "English"},
            {id: "2", name: "France"}
        ],
        instructor: {
            name: 'Jose Portilla',
            shortDescription: 'Head of Data Science, Pierian Data Inc.',
            instructorRating: 4.6,
            numberOfReview: 27304,
            avatar: 'https://img-b.udemycdn.com/user/75x75/9685726_67e7_4.jpg?secure=2jlgVQeBH46k_DKJxcxgxQ%3D%3D%2C1607671067',
            student: 2934223,
            numberOfCourse: 31,
            longDescription: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur assumenda atque autem beatae cum cumque dolor eius enim est eum facere facilis fugiat id illum impedit ipsa ipsum itaque iusto laborum magni molestiae mollitia necessitatibus nesciunt nisi nulla optio perferendis qui quod reprehenderit saepe sequi sit soluta, tempora veritatis vitae voluptas. A, eaque illum impedit modi mollitia nam nesciunt recusandae tempore. Aliquam animi aperiam asperiores commodi consectetur corporis culpa cupiditate deleniti doloribus earum eligendi et, eveniet explicabo illum labore laboriosam maxime molestiae mollitia, nihil nostrum obcaecati perspiciatis quasi qui recusandae sequi suscipit tempore tenetur vel voluptas voluptates. Molestiae, nihil?',

        },
        price: "129.99",
        incentive: [
            {id: "1", name: "44 hours on-demand video"},
            {id: "2", name: "75 articles"},
            {id: "3", name: "38 downloadable resources"},
            {id: "4", name: "Full lifetime access"},
            {id: "5", name: "Access on mobile and TV"},
            {id: "6", name: "Certificate of completion"}
        ]
    };
}

const findByCategory = (category) => {
    return [];
}
const findByAuthor = (author) => {
    return [];
}
const search = (criteria) => {
    return [];
}


module.exports = {
    findById,
    findAll,
    search,
}