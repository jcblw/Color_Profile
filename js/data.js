var color_form = {
        current : null,
        colors : ["fde743", "ffc21e", "ff8810", " ff7f00", "52a42d", "a6d00d", "77d46c", "89e8c1", "b2d62c", "82c86d", "44a37b", "29932c", "2f5420", "272d1b", "0d1b19", "0c231b", "0d3819", "ab3218", "e72305", "ad1a0a", "a30c0d", "801101", "750300", "4e0003", "19655d", "15b2c7", "1987a5", "205f91", "1067a0", "3082ad", "2051a3", "1e3c45", "062890", "214371", "0a0c17", "0a0c17", "051842", "0d3273", "893c68", "2f294f", "a45da6", "482873", "4a143f", "2a0f38", "d38bba", "d46f6f", "ed7a92", "d05267", "e6505c", "d0365d", "d15d97", "ce398f", "ba1756", "780738", "720922", "960c17", "5e0005", "410005", "2d0102", "5f080a", "44110f", "5e2a1c", "8a4328", "6b2118", "6c3f28", "261c10", "2f211b", "352315", "8a7707", "c8815d", "daa577", "dbaf89", "e9cb99", "ffffff", "cecece", "a0a0a0", "7b888d", "d9d9d9", "909090", "495154", "3d484a", "242424", "0d0d0d"],
        pos : [],
        sections : [
            {
               title: 'Past',
               desc: 'If your Primary Color for the question does not quite fulfill your answer you may choose up to three more colors.',
               questions : [
                  'What Color touched you as you were born?',
                  'This Color describes your early years.',
                  'These Colors relate to your uniqueness.',
                  'Choose the Color you would like to color all your dreams.',
                  'What Colors speak of your challenges?',
                  'What Colors to you represent Change?',
                  'What Colors that entice you?'
               ]
            },
            {
               title: 'Present',
               desc: 'Next Please Choose 4 Colors',
               questions : [
                  'Colors of implementation.',
                  'Colors that give me a sense of fulfillment.',
                  'The Color you feel at this moment if you could you would become.',
                  'What Color is calling you today?',
               ]
            },
            {
               title: 'FUTURE',
               desc: 'Next Please Choose 4 Colors',
               questions : [
                  'A Color that will elevate your thinking.',
                  'This Color brings understanding.',
                  'Within this Color I feel security.',
                  'My spiritual wisdom, and mental integrity is released through these Colors.',
                  'I value this Color '
               ]
            },
            {
                title: 'THIS SPECIAL COLOR SECTION WILL PROVIDE INSIGHT FOR THE FOLLOWING AREAS',
                desc: 'Next Please Choose 4 Colors',
                questions : [
                  'INTELLECTUAL ACTIVITY',
                  'PHYSICAL HEALTH',
                  'SPIRITUAL ATTUNEMENT',
                  'EMOTIONAL BALANCE'
                ]
            }
        ],
        contact : [
            {
                title: 'Full Name',
                name : 'full_name',
                type : 'text',
                required : true
            },
            {
                title: 'Birthday',
                name : 'birthday',
                type : 'text',
                required : false
            },
            {
                title: 'Time of Birth',
                name : 'birth_time',
                type : 'text',
                required : false
            },
            {
                title: 'Phone Number',
                name : 'telephone',
                type : 'text',
                required : false
                
            },
            {
                title: 'Email Address',
                name : 'email',
                type : 'text',
                required : true
            }
        ],
        data : [],
    };