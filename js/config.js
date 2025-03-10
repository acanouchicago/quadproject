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
                text: `Founded in 1890, the University received most of its initial funding from renowned industrialist John D. Rockefeller and a substantial land grant from Marshall Field, a department store magnate. The earliest buildings were designed by Henry Ives Cobb in a Gothic Revival style, which set the tone for the University's architectural identity.`,
                timeline_year: 1889,
                image: './static/images/quad_plot.png',
                image_credit: 'University of Chicago Photographic Archive, 1891',
            },
            {
                id: '1.2',
                text: `The final plan designed by Cobb consisted of seven connected quadrangles enclosed by neo-Gothic-style buildings, intended to evoke the timeless traditions of medieval English universities. This design was intended to create a sense of order, tradition, and academic excellence.`,
                timeline_year: 1890,
                image: './static/images/Cobb_3D.jpg',
                image_credit: '<i>The Arhitectural Record<i>, IV, No. 2, 1894'
            },
            {
                id: '1.3',
                text: `In 1901, O.C. Simonds attempted to do away with Cobb's vision of formal quadrangles, instead opting to use irregular desire paths and landscaping, such as random clusters of trees and curving pathways. This more naturalistic approach was meant to blend the campus with its surroundings.`,
                timeline_year: 1892,
                image: './static/images/Aerial_1901.png',
                image_credit: 'University of Chicago Photographic Archive, 1901'
            },
            {
                id: '1.3a',
                text: `Following a request from an administrator to redesign the quad landscaping, John Charles Olmsted (of the Olmsted brothers and nephew of renowned architect Frederick Law Olmsted) introduced a more organized and formal layout, which remains largely intact today.`,
                image: './static/images/chapter1.jpg',
                image_credit: 'University of Chicago Photographic Archive, 1916'
            },
            {
                id: '1.4',
                text: `Ultimately, the University of Chicago's quadrangles design resulted from a combination of architectural imagination, educational ideals, and late nineteenth-century Chicago's cultural and economic ambitions.`,
                timeline_year: 1927
            },
            {
                id: '1.5',
                text: `A relatively more recent development in the design of the quad came in 2009, when the pathways were redesigned to make them more pedestrian-friendly (<a href='https://chronicle.uchicago.edu/090312/quad.shtml'>UChicago Chronicle</a>). The changes included widening paths, adding benches, and improving lighting.`,
                image: './static/images/quad_ped.jpg',
                image_credit: '<i>The University of Chicago Chronicle<i>, 2009'
            }
        ]
    },
    {
        chapterTitle: 'The Historical and Contemporary Quad',
        chapterYears: '1933–1948',
        id: '2',
        image: './static/images/quad_2025.jpg',
        img_credit: 'Alan Cano',
        subsections: [
            {
                id: 'demographics',
                text: `Given the quadrangles’ central location and historic appearance, they have served as an iconic ceremonial backdrop for many important University events, such as opening and graduation ceremonies.`,
                image: './static/images/1894_convo.jpg',
                image_credit: 'University of Chicago Photographic Archive, 1894'
            },
            {
                id: '2.1',
                text: `In later years, <span class="highlight bloocolor">Hutchinson Court</span> (the northwesternmost quadrangle) would go on to host convocations, most likely due to the historic and picturesque setting.`,
                image: './static/images/1910_convo.jpg',
                image_credit: 'University of Chicago Photographic Archive, 1910'
            },
            {
                id: '2.2',
                text: `At times, the quadrangles have been used to reinforce the University’s global visibility, as well. In 1977, during his visit to the United States, then-Prince Charles of the United Kingdom visited the University and toured the quads.`,
                image: './static/images/charles_visit.jpg',
                image_credit: 'University of Chicago Photographic Archive, 1977'
            },
            {
                id: '2.3',
                text: `Beyond formal events, the quadrangles are a popular spot for informal student life, including relaxation, socialization, and casual outdoor study sessions. Their accessible design and lush greenery make them a beloved part of campus life.`,
                timeline_year: 1948,
                image: './static/images/college_quad.png',
                image_credit: 'University of Chicago Instagram page, 2023'
            }
        ]
    },
    {
        chapterTitle: 'A Quad in Unrest: The 2024 Encampment',
        chapterYears: '1949-1962',
        id: '3',
        image: './static/images/nyt_camp.jpg',
        img_credit: '<i>The New York Times</i>',
        subsections: [
            {
                id: '3.0',
                text: `The UChicago quadrangles have long been a staging ground for student activism, testing the university’s longstanding commitment to free expression. Notable protests include a 1969 sit-in against the Vietnam War and more recent movements advocating for divestment from fossil fuels.`,
                image: './static/images/60_quad_protest.jpg',
                image_credit: 'University of Chicago Photographic Archive, 1969'
            },
            {
                id: '3.0a',
                text: `On April 29, 2024, following other protests across the United States in support of Gazans in their conflict with Israel, approximately 100 students set up about 20 tents on the quad, marking the start of a week-long encampment.`,
                image: './static/images/day1_encamp.jpg',
                image_credit: 'Chicago Maroon'
            },
            {
                id: '3.1',
                text: `The decision to occupy the western side of the central quadrangle specifically was deliberate and symbolic. Not only was the encampment occupying a central and historic part of the campus, but it also made a powerful statement about the visibility and gravity of their cause.`,
            },
            {
                id: '3.2',
                text: `Protesters significantly transformed and adapted the design of the quad, erecting wooden barriers and makeshift fencing around the encampment to define boundaries. Similar to past protests, these changes were meant to create a sense of community and solidarity among the participants.`,
                image: './static/images/encamp_library.jpg',
                image_credit: 'Chicago Maroon'
            },
            {
                id: '3.3',
                text: `In a notable act of solidarity and support, a group of UChicago faculty publicly declared their willingness to risk arrest alongside students, defending the encampment as a justified exercise of their free speech rights.`,
                image: './static/images/encamp_prof.jpg',
                image_credit: 'The New York Times'
            },
            {
                id: '3.4',
                text: `In the eyes of the University administration, these spatial adaptations of the quad were in violation of the University policy that free speech must be non-disruptive, which led to tensions between the protestors and the administration.`,
                image: './static/images/encamp_police.jpg',
                image_credit: 'Chicago Maroon'
            },
            {
                id: '3.5',
                text: `Finally, the University administration issued an ultimatum for the protesters to vacate the quad, citing safety and access concerns. When the protesters refused to leave, the University called in the police to dismantle the encampment and arrest those who resisted.`,
                image: './static/images/encamp_police_arrest.jpg',
                image_credit: 'Chicago Maroon'
            }
        ]
    },
    {
        subsections: [
            {
                id: 'final-scroller',
                text: ``
            }
        ]
    }
];

sessionStorage.setItem('config', JSON.stringify(config));
