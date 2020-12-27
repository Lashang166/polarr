const products = [
    {
         id: 1,
         name: "atque corrupti quos dolores",
         color: ["red","green", "blue"],
         price: 98.4,
         countInStock: 122,
         category: ["Dress","Browdress", "Brown Leather Bag", "Jersey Dress"],
         size: ["S","X","XL"],
         tag: ["Dress","Browdress","shose", "Double Cheeky"],
         image: [
            "https://images.unsplash.com/photo-1582041148887-67274b989ae3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
            "https://images.unsplash.com/photo-1509087859087-a384654eca4d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
            "https://images.unsplash.com/photo-1508742345712-0656a285ac27?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80",
            "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
            "https://images.unsplash.com/photo-1547657877-68412c96e722?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80",
            "https://images.unsplash.com/photo-1545291730-faff8ca1d4b0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80",
         ],
         review: [{
             username: "admin",
             detail: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
         }]
         
    },
    {
         id: 2,
         name: "blanditiis praesentium",
         color: ["red","green", "yelow"],
         price: 122,
         countInStock: 100,
         category: ["Dress","Browdress", "Brown Leather Bag", "Jersey Dress"],
         size: ["S","X","M","XL"],
         tag: ["Dress","Browdress","shose", "Double Cheeky"],
         image: [
              "https://images.unsplash.com/flagged/photo-1559502858-8041d0747820?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80",
              "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
              "https://images.unsplash.com/photo-1548105691-63f4815922fb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80",
        ],
         review: [
            {
                username: "admin",
                detail: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
                username: "person",
                detail: "Duis aute irure dolor in reprehenderit in ."
            }
        ]
         
    },
    {
         id: 3,
         name: "Neque porro quisquam",
         color: ["blue","green"],
         price: 88,
         countInStock: 10,
         category: ["Dress","Browdress", "Brown Leather Bag", "Jersey Dress"],
         size: ["S","X","M","XL"],
         tag: ["Dress","Browdress","shose", "Double Cheeky"],
         image: [
              "https://images.unsplash.com/photo-1486044988991-ba1bd3194dc1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80",
              "https://images.unsplash.com/photo-1485811904074-04513843270c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80",
              "https://images.unsplash.com/photo-1476817343404-01ccd61218d3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80",
        ],
         review: [
            {
                username: "admin",
                detail: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
                username: "person",
                detail: "Duis aute irure dolor in reprehenderit in ."
            }
        ]
         
    },
    {
         id: 4,
         name: "suscipit cursus ",
         color: ["red","gray"],
         price: 122,
         countInStock: 100,
         category: ["Dress","Browdress", "Brown Leather Bag", "Jersey Dress"],
         size: ["S","X","M","XL"],
         tag: ["Dress","Browdress","shose", "Double Cheeky"],
         image: [
              "https://images.unsplash.com/photo-1475180098004-ca77a66827be?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80",
              "https://images.unsplash.com/photo-1475178626620-a4d074967452?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=333&q=80",
              "https://images.unsplash.com/photo-1509087859087-a384654eca4d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
              "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80",
              "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
        ],
         review: [
            {
                username: "admin",
                detail: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
                username: "person",
                detail: "Duis aute irure dolor in reprehenderit in ."
            }
        ]
         
    },
    {
         id: 5,
         name: "voluptate velit esse quam",
         color: ["red","green", "yelow"],
         price: 122,
         countInStock: 100,
         category: ["Dress","Browdress", "Brown Leather Bag", "Jersey Dress"],
         size: ["S","X","M","XL"],
         tag: ["Dress","Browdress","shose", "Double Cheeky"],
         image: [
              "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
              "https://images.unsplash.com/photo-1546249511-259f23599066?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=700&q=80",
              "https://images.unsplash.com/photo-1548105691-63f4815922fb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80",
        ],
         review: [
            {
                username: "admin",
                detail: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
                username: "person",
                detail: "Duis aute irure dolor in reprehenderit in ."
            }
        ]
         
    },
    {
         id: 6,
         name: "Et harum quidem rerum facili",
         color: ["indigo","pink", "yelow"],
         price: 122,
         countInStock: 100,
         category: ["Dress","Browdress", "Brown Leather Bag", "Jersey Dress"],
         size: ["S","X","M","XL"],
         tag: ["Dress","Browdress","shose", "Double Cheeky"],
         image: [
              "https://images.unsplash.com/photo-1546249511-259f23599066?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=700&q=80",
              "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
              "https://images.unsplash.com/photo-1548105691-63f4815922fb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80",
              "https://images.unsplash.com/photo-1547657877-68412c96e722?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80",
              "https://images.unsplash.com/photo-1545291730-faff8ca1d4b0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80",
            ],
         review: [
            {
                username: "admin",
                detail: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
                username: "person",
                detail: "Duis aute irure dolor in reprehenderit in ."
            }
        ]
         
    },
    {
         id: 7,
         name: "imperdiet malesuada",
         color: ["red","green", "yelow"],
         price: 122,
         countInStock: 100,
         category: ["Dress","Browdress", "Brown Leather Bag", "Jersey Dress"],
         size: ["S","X","M","XL"],
         tag: ["Dress","Browdress","shose", "Double Cheeky"],
         image: [
              "https://images.unsplash.com/photo-1501870190084-cdf29f15ef87?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
              "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
              "https://images.unsplash.com/photo-1548105691-63f4815922fb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80",
        ],
         review: [
            {
                username: "admin",
                detail: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
                username: "person",
                detail: "Duis aute irure dolor in reprehenderit in ."
            }
        ]
         
    },
    {
         id: 8,
         name: "Mauris eget",
         color: ["red","green", "yelow"],
         price: 122,
         countInStock: 100,
         category: ["Dress","Browdress", "Brown Leather Bag", "Jersey Dress"],
         size: ["S","X","M","XL"],
         tag: ["Dress","Browdress","shose", "Double Cheeky"],
         image: [
              "https://images.unsplash.com/photo-1592669241067-2f92a1048085?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
              "https://images.unsplash.com/photo-1590642739874-5666f3e6e246?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=670&q=80",
              "https://images.unsplash.com/photo-1589427246538-9bc0547716a6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80",
              "https://images.unsplash.com/photo-1589427132524-442fbf09fd03?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80",
              "https://images.unsplash.com/photo-1589427126102-b797237eb821?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80",
              "https://images.unsplash.com/photo-1589427181154-4bee44377c81?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80",
        ],
         review: [
            {
                username: "admin",
                detail: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
                username: "person",
                detail: "Duis aute irure dolor in reprehenderit in ."
            }
        ]
         
    },
];



export default products