module.exports = {
    findAll() {
        return [];
    },
    findById (id) {
        return {
            name: "Machine Learning A-Z™: Hands-On Python & R In Data Science",
            headline: "Learn to create Machine Learning Algorithms in Python and R from two Data Science experts. Code templates included.",
            rating: "4.5",
            num_review: "136,222",
            num_enroll: "720,144",
            author: " Kiril Elemenko",
            updated_date: "1/1/2020",
            language: "English",
            caption_language:[
                {id: "1", name: "English"},
                {id: "2", name: "France"}
            ],
            price: "129.99",
            incentive:[
                {id: "1", name: "44 hours on-demand video"},
                {id: "2", name: "75 articles"},
                {id: "3", name: "38 downloadable resources"},
                {id: "4", name: "Full lifetime access"},
                {id: "5", name: "Access on mobile and TV"},
                {id: "6", name: "Certificate of completion"}
            ]
        };
    },
    findByCategory(category){
        return [];
    },
    findByAuthor(author) {
        return [];
    },
    findByCriteria(criteria){
        return [];
    }
}