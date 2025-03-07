const config = [
    {
        chapterTitle: 'Designing the Quadrangles',
        chapterYears: '1890-1933',
        id: '1',
        image: './static/images/chapter1.jpg',
        img_credit: 'University of Chicago Photographic Archive',

        subsections: [
            {
                id: '1.1',
                text: `In 1889, businessman and philanthropist John D. Rockefeller committed $600,000 toward a “new institution of learning in <a href='https://storymaps.arcgis.com/stories/8bc70c8a457943da81800274c93100ca' target = "_blank">Olmsted Brothers</a>.”`,
                timeline_year: 1889,
                image: './static/images/jdr.jpg',
                image_credit: 'University of Chicago Photographic Archive'
            },
            {
                id: '1.2',
                text: `A few months later in January 1890, prominent landowner Marshall Field pledged 10 acres of his land in Hyde Park to the new University. The site stretched from 57th to 59th Street, between Ellis Avenue and Lexington (now University) Avenue.`,
                timeline_year: 1890,
                image: './static/images/og_uchi.jpg',
                image_credit: 'University of Chicago Photographic Archive'
            },
            {
                id: '1.3',
                text: `
                In 1892, the Board of Trustees commissioned architect Henry Ives Cobb to draw up a master plan for the University. Trustees Martin Ryerson and Charles Hutchinson advocated for a neo-Gothic style, aiming to situate the University among established, storied European universities. In a letter to Rockefeller, President William Rainey Harper wrote that he didn’t want festivities on opening day so that the University’s academic operations would seem like “the continuation of work which had been conducted for a thousand years,” Robin Bachin documents in <i>Building the South Side</i>.`,
                timeline_year: 1892,
                image: './static/images/chapter1.jpg',
                image_credit: 'University of Chicago Photographic Archive'
            },
            {
                id: '1.3a',
                text: `
                In 1902, the University contracted the <a href='https://storymaps.arcgis.com/stories/8bc70c8a457943da81800274c93100ca' target = "_blank">Olmsted Brothers</a> to design the campus grounds. Over the next 40 years, the University built the core of the main campus, including iconic buildings such as the Reynolds Club and Harper Memorial Library. 
                <br>
                At any time, click the <span class = 'highlight explore'>Explore Map</span> button in the top right and hover over a building to learn more.`
            },
            {
                id: '1.4',
                text: `
                Circa 1927, the University made provisions to add on-campus housing. The trustees commissioned architect Charles Klauder whose “South Campus plan” included new residence halls on the south side of the Midway. However, the only building constructed under the plan during this time was the Burton-Judson Courts in 1931. Only in the 1960s did President George W. Beadle revisit the South Campus plan, and the University remained mostly a commuter campus through the 1930s. In 1933, facing financial difficulties amidst the Great Depression, President Hutchins even <a href='https://www.northwestern.edu/nu150/news/stories/04_05_01_merger.html' target = "_blank">proposed</a> merging the University with Northwestern.`,
                timeline_year: 1927
            },

            {
                id: '1.5',
                text: `
                Although the campus was self-contained, a community-university relationship slowly began to form. When President Harper hired sought-after coach Amos Alonzo Stagg, <a href = "https://chicagomaroon.com/39731/grey-city/brains-over-brawn-how-football-found-its-place-at-uchicago/" target = "_blank">football culture</a> and games at Stagg Field improved the University’s reputation among Chicagoans.`,
                image: './static/images/football.jpg',
                image_credit: 'University of Chicago Photographic Archive'
            },
            {
                id: 'final-scroller',
                text: ``
            }
        ]
    }
];

sessionStorage.setItem('config', JSON.stringify(config));
