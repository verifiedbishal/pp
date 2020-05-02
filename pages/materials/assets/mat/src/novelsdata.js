let novel1,novel2,novel3,novel4,novel5,novel6,novel7,novel8 = [];
let h = [
    {"text" : "Heading of the books"},
    {"text" : "Chetan Bhagat"},
    {"text" : "The Secret Trilogy"},
    {"text" : "Robert T. Kiyosaki"},
    {"text" : "Salman Rushdie"},
    {"text" : "Famous"},
    {"text" : "Sports"},
    {"text" : "Self Help"}
];
        novel1 = [
            {"name" : ["Revolution 2020 Love Corrupt","https://drive.google.com/open?id=1YLjJJd_YTXdHe9NBsHIMgIWhpwzX-ls0"]},
            {"name" : ["2 States","https://drive.google.com/open?id=1ZMsz3wvR0m6Ww895MZxWv6L2MDgEYTdg"]},
            {"name" : ["3 Mistakes Of My Life","https://drive.google.com/open?id=1CTHr38vk9qtoodZtsvsBHKMaG13ltTXs"]},
            {"name" : ["Five Point Someone","https://drive.google.com/open?id=1kl7fUrjv4mNX4_O00wRZaVuJYDQNEWfg"]},
            {"name" : ["One Night At The Call Center","https://drive.google.com/open?id=19JjhBuB6KqNfXEOlvZ9qeGoc_NT8FMYx"]}
        ];
        novel2 = [
            {"name" : ["The Captive","https://drive.google.com/open?id=16c_YmH2D1UB-ixnUmDXuV973VTMlK-d5"]},
            {"name" : ["The Initiation","https://drive.google.com/open?id=1Sb4Ub16YxdVu7KuJlzqQ5UhOKZerHeNH"]},
            {"name" : ["The Power","https://drive.google.com/open?id=152truqFOAQ6b9fPJnJI2EIZsI8jTdZi3"]}
        ];
        novel3 = [
            {"name" : ["Rich Dad, Poor Dad","https://drive.google.com/open?id=14yjtjNDbzRqwUIDWRctRlZcCGSKxorrt"]}
        ];
        novel4 = [
            {"name" : ["Midnight's Children","https://drive.google.com/open?id=1V-5_TISfcaJffkbKG08Pw7RvqZWkSj8l"]},
            {"name" : ["The Satanic Verses","https://drive.google.com/open?id=1w11symAsJBe9GXKhncSXxd2AoWcvt3Wt"]}
        ];
        novel5 = [
            {"name" : ["100 Most Influential World Leaders Of All Time","https://drive.google.com/open?id=14iH6RqfOikB44SD09iishg2kKz4dgEZk"]},
            {"name" : ["China Great Economic Transformation","https://drive.google.com/open?id=1rJlYgk8UwIAWW74lbDGNav8m7k8073k-"]},
            {"name" : ["Chomsky, Noam - Media Control The Spectacular Achievements Of Propaganda","https://drive.google.com/open?id=1BTL6HiDuCmTXI-MPcIZ6ayd54lQ0qick"]},
            {"name" : ["Encyclopedia Of Disasters - Environmental Catastrophes and Human Tragedies","https://drive.google.com/open?id=1NvNZns-bFjyIutgILfLXsZOrbuZdPE2j"]},
            {"name" : ["Freakonomics","https://drive.google.com/open?id=1QFmsvkLLrCXL4gfEhdMeqACko_qTokzy"]},
            {"name" : ["Icke - Children Of The Matrix","https://drive.google.com/open?id=1XEx-2VSX44zto06drEKIYaOrmVBjFTuy"]},
            {"name" : ["J. D. Salinger - The Catcher In The Rye","https://drive.google.com/open?id=1sOR1JYLlOSP-lN5BBNa19wPRwVIacVHS"]},
            {"name" : ["Orwell, George - Animal Farm","https://drive.google.com/open?id=1ZpH8xorm7ys-acbKf5HlttOHWD8FK0D7"]},
            {"name" : ["Refusing To Be A Man","https://drive.google.com/open?id=1ZyKXry8B007j5yjx-nZCQMNErNlzTtAk"]},
            {"name" : ["Seven Deadliest Unified Communications Attacks","https://drive.google.com/open?id=1Tdv-AsSnlXVImarqhM3Ey7iH573weMIo"]},
            {"name" : ["Super Freakonomics","https://drive.google.com/open?id=1PLYR0ji8wAIyzWWZm_BlZtS8E2D696W5"]},
            {"name" : ["The Audacity Of Hope","https://drive.google.com/open?id=1fd8SIFvPAqF-vpUMCC63pwHHAjOAG-6B"]},
            {"name" : ["The Universal Force","https://drive.google.com/open?id=1katV-sMIVLV8TFkgnpiC3GsOAYxJ1cgp"]}
        ];
        novel6 = [
            
        ];
        novel7 = [
            
        ];
        novel8 = [
            
        ];
        let all = [
            {"novel" : [novel1,novel2,novel3,novel4,novel5,novel6,novel7,novel8]}
        ]

        for(let j = 1; j <= all[0].novel.length; j++){
            var data = document.getElementById("myD" + j);
            var m = document.createElement("h2");
            m.innerHTML = '<h2>' + h[j].text + '<span>[Click to view / download]</span></h2>';
            data.appendChild(m);
            var dataAll = document.getElementById("myD" + j);
            for(let k = 0; k < all[0].novel[j - 1].length ; k++){
                var el2 = document.createElement("li");
                el2.innerHTML = '<a href = \"'  + all[0].novel[j - 1][k].name[1] + ' \">' + all[0].novel[j - 1][k].name[0] + '</a>';
                dataAll.appendChild(el2);
            }
        }