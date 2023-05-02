// let dataArticle = [
//     {
//         id: 1,
//         name: "The Wall Street Journal",
//         author: "The Wall Street Journal",
//         title: "Lebrecht — One Man's Relationship With Beethoven's Music",
//         description: "It is a sad fact in the 2020s that anyone writing a book praising the achievements of an artist on the order of Ludwig van Beethoven situates himself on the dangerous side of a political question. The Wall Street Journal",
//         url: "https://www.wsj.com/articles/why-beethoven-review-can-a-genius-survive-a9e1e516",
//         urlToImage: "https://images.wsj.net/im-770110/social",
//         publishedAt: "2023-04-28T17:26:00Z",
//         src : "./images/1.jpg",
//         content: "In 2010 the British music critic Norman Lebrecht published Why Mahler? The book was an attempt to explain why the symphonies of Gustav Mahler (1860-1911) inspired both hatred and adoration in his lif… [+781 chars]",
//     },
//     {
//         id: 2,
//         name: "The Wall Street Journal",
//         author: "wsj",
//         title: "The Ugly World of Add-On Fees for Everything",
//         description: "Here's a trend I hope doesn't catch on: Paying extra for things I like less",
//         url: "https://www.wsj.com/articles/the-ugly-world-of-add-on-fees-for-everything-e41dc776",
//         urlToImage: "https://images.wsj.net/im-770864/social",
//         publishedAt: "2023-04-28T14:00:04Z",
//         src: "2.jpg",
//         content: "The Ugly World of Add-On Fees for Everything\r\nI couldn't watch the lowly Colorado Rockies get smacked around by my Philadelphia Phillies on Sunday; I forgot that the TV broadcast was only on Peacock.… [+1030 chars]",
//     },
//     {
//         id: 3,
//         name: "The Wall Street Journal",
//         author: "wsj",
//         title: "NOONAN: Biden vs. Trump in 2024? Don't Be So Sure...",
//         description: "Look at voters' faces when you describe the match-up and you'll realize they're open to alternatives.",
//         url: "https://www.wsj.com/articles/biden-vs-trump-dont-be-so-sure-rfk-third-party-rematch-2024-election-independents-bea741f2",
//         urlToImage: "https://images.wsj.net/im-771700/social",
//         publishedAt: "2023-04-28T12:00:04Z",
//         src: "3.jpg",
//         content: "Opinion | Biden vs. Trump in 2024? Don't Be So SureWonder Land: A beside-the-point president is the best thing that has ever happened to the progressive centralization project. But its success in 202… [+1333 chars]"
//     },
//     {
//         id: 4,
//         name: "The Wall Street Journal",
//         author: "wsj",
//         title: "USA Arms Warplanes With 'Bunker Busting' Bombs in Message to Iran...",
//         description: "The Air Force's A-10 Warthogs are carrying 250-pound precision-guided weapons in the Mideast",
//         url: "https://www.wsj.com/articles/u-s-arms-warplanes-with-bunker-busting-bombs-in-message-to-iran-ba1ecb08",
//         urlToImage: "https://images.wsj.net/im-771451/social",
//         publishedAt: "2023-04-28T12:00:04Z",
//         src: "4.jpg",
//         content: "WSJ News Exclusive | U.S. Arms Warplanes With 'Bunker Busting' Bombs in Message to Iran\r\nThe U.S. military is for the first time putting 250-pound “bunker busting” bombs on attack aircraft recently s… [+1076 chars]"
//     },
//     {
//         id: 5,
//         name: "The Wall Street Journal",
//         author: "wsj",
//         title: "'I Cloned Myself With AI. She Fooled My Bank and My Family'...",
//         description: "Our columnist replaced herself with AI voice and video to see how humanlike the tech can be. The results were eerie.",
//         url: "https://www.wsj.com/articles/i-cloned-myself-with-ai-she-fooled-my-bank-and-my-family-356bd1a3",
//         urlToImage: "https://images.wsj.net/im-771604/social",
//         publishedAt: "2023-04-28T11:00:04Z",
//         src: "5.jpg",
//         content: "I Cloned Myself With AI. She Fooled My Bank and My Family.Photo illustration: Elena ScottiThe good news about AI Joanna: She never loses her voice, she has outstanding posture and not even a converti… [+795 chars]"
//     },
// ];

// const dataArticleTemplate = document.querySelector("[data-article-template]")
// const dataArticleCardContainer = document.querySelector("[data-article-card-container]")
// const searchInput = document.querySelector("[data-search]")

// let articles = []

// searchInput.addEventListener("input", e => {
//     const value = e.target.value.toLowerCase()
//     articles.forEach(article => {
//         const isVisible = 
//             article.title.toLowerCase().includes(value) || 
//             article.body.toLowerCase().includes(value)
//         article.element.classList.toggle("hide", !isVisible)
//     })
// })

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())
// .then(data => {
//     articles = data.map(article => {
//     const card = dataArticleTemplate.content.cloneNode(true).children[0]
//     const header = card.querySelector("[data-header]")
//     const body = card.querySelector("[data-body]")
//     header.textContent = article.nama
//     body.textContent = article.email
//     dataArticleCardContainer.append(card)
//     return { title: article.name, body: article.email, element: card }
//     })
// })

const data = [
	'Lebrecht — One Mans Relationship With Beethovens Music =======> It is a sad fact in the 2020s that anyone writing a book praising the achievements of an artist on the order of Ludwig van Beethoven situates himself on the dangerous side of a political question. The Wall Street Journal',
    'The Ugly World of Add-On Fees for Everything =======> Heres a trend I hope doesnt catch on: Paying extra for things I like less',
	'NOONAN: Biden vs. Trump in 2024? Dont Be So Sure... =======> Look at voters faces when you describe the match-up and you will realize they are open to alternatives' ,
	'USA Arms Warplanes With "Bunker Busting" Bombs in Message to Iran =======> The Air Forces A-10 Warthogs are carrying 250-pound precision-guided weapons in the Mideast',
	'I Cloned Myself With AI. She Fooled My Bank and My Family =======> Our columnist replaced herself with AI voice and video to see how humanlike the tech can be. The results were eerie',

];

const btnSearch 	= document.getElementById('btnSearch');
const btnClear 		= document.getElementById('btnClear');
const search 		= document.getElementsByName('keyword')[0];
const data_section 	= document.getElementsByClassName('data')[0];

btnSearch.addEventListener('click', event => {
	searchData();
});

btnClear.addEventListener('click', event => {
	search.value = "";
});

search.addEventListener('keyup', event => {
	if (event.keyCode === 13) {
		searchData();
	}
});


function searchData() {
	const search_value 	= search.value.toLowerCase();

	// Copy array data ke variable data_filtered
	const data_filtered = data.slice(0);

	// Lakukan perulangan pada semua data untuk cek apakah ada yang mengandung "keyword" atau tidak
	data_section.innerHTML = "";
	for (var i = 0; i < data_filtered.length; i++) {
		if ( data_filtered[i].toLowerCase().includes(search_value) ) {			
			// Jika ada, Masukkan data ke list data pencarian yang didapat
			data_section.innerHTML += "<a href='#'>"+data_filtered[i]+"</a>";
		}
	}	
}