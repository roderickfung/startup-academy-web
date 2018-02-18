const data = {
  header: {
    backgroundImage: 'http://via.placeholder.com/1980x1020',
    title: 'YOUR SPEAKERS',
    details: '2018 Speakers: Founders, Social Entrepreneurs, Culture Builders, Technology Innovators and more'
  },
  sections: [
    {
      // header:"WHAT IS <span className='blue'>STARTUP HACKS</span>?",
      header: 'WHAT IS STARTUP HACKS?',
      blueWords: ['STARTUP', 'HACKS'],
      subheader:[
        'this subheader test subheader test subheader this subheader test subheader test subheader '
      ],
      p: [
        "Hello there! Come here my little friend. Don't be afraid. Don't worry, he'll be all right. What happened? Rest easy, son, you've had a busy day. You're fortunate you're still in one piece. Ben? Ben Kenobi! Boy, am I glad to see you! The Jundland wastes are not to be traveled lightly. Tell me young Luke, what brings you out this far? Oh, this little droid! I think he's searching for his former master...I've never seen such devotion in a droid before...there seems to be no stopping him. He claims to be the property of an Obi-Wan Kenobi. Is he a relative of yours? Do you know who he's talking about?",
        "Hey...hey, open the pressure maintenance hatch on unit number... where are we? Three-two-six-eight-two-seven. If we can just avoid any more female advice, we ought to be able to get out of here. Well, let's get moving! Where are you going? No, wait. They'll hear! Come here, you big coward! Chewie! Come here! Listen. I don't know who you are, or where you came from, but from now on, you do as I tell you. Okay? Look, Your Worshipfulness, let's get one thing straight! I take orders from one person! Me! It's a wonder you're still alive. Will somebody get this big walking carpet out of my way? No reward is worth this.",
      ],
      icons: [
        {
          img: 'https://hairandbarbersmarket.ie/wp-content/uploads/2017/01/graduate-icon-7835-400x400.png',
          info: 'Educate.'
        },
        {
          img: 'http://wildernessusa.com/wp-content/uploads/2016/03/lightbulb_icon-400x400.png',
          info: 'Idate.'
        },
        {
          img: 'http://cdn2.hubspot.net/hub/211732/file-887614047-png/images/icon-collaborate-720x480.png',
          info: 'Collaborate.'
        }
      ],
      gal: [
        'https://cdn.wallpapersafari.com/68/50/dRO7nz.jpg',
        'https://best-wallpaper.net/wallpaper/1600x900/1206/Ice-and-Fire-showdown_1600x900.jpg',
        'http://www.wallpapermaiden.com/image/2017/11/18/bentley-continental-gt3-front-view-cars-supercar-lights-vehicle-18596-thumb.jpg',
        'https://d1ljaggyrdca1l.cloudfront.net/wp-content/uploads/2017/03/azure-seas-and-palm-trees-seychelles-1600x900.jpg'
      ],
      recog: [
        {
          img:'https://i.pinimg.com/474x/93/0b/d7/930bd7b9ac8ce383852f51f6630317d2--inspirational-leaders-tesla-motors.jpg',
          name:'Elon Musk',
          description:'SpaceX, Tesla'
        },
        {
          img:'https://s-media-cache-ak0.pinimg.com/originals/28/a2/bb/28a2bb1aa2df7b1e40a2cd2d3ef17621.jpg',
          name:'Mark Zuckerberg',
          description:'FaceSmash.com'
        },
        {
          img:'https://pbs.twimg.com/profile_images/2580143981/i17jfs0bvg2dipb4wm6u_400x400.png',
          name:'Jack Ma',
          description:'FaceSmash.com'
        },
      ]
    },
    {
      header:'WHAT IS STARTUP HACKS?',
      blueWords: ['STARTUP', 'HACKS'],
      subheader: [
        'Startup Hacks is an entrepreneurship event like no other.'
      ],
      p:[
        "Over the course of two weekends, you’ll experience the fun, pressure, highs and lows that go with creating a startup business. ",
        "What you can expect is hands-on training & mentorship from industry professionals to help you prepare your idea for the expo pitch. This competition requires no coding and instead you’ll be using prototyping tools, mockups or anything else you can think of to visually demo your idea to the judges. ",
        "You'll have the opportunity to meet with the very best mentors, founders, professionals, and sponsors who are ready to help you get started.",
        "Competitors will work in teams (up to 3) or solo."
      ]
    },
    {
      header:'WHO ARE WE?',
      blueWords: ['ARE', 'WE'],
      p:[
        "Our organization Startup Academy aims to empower entrepreneurship globally by putting together startup related initiatives that engage the community.",
        "We decided to host 'Startup Hacks 2017' because we thought it's an interesting way to get youth to be more engaged with the idea of social entrepreneurship by giving them resources and hands-on challenges to complete."
      ],
      icons:[
        {
          img: 'https://hairandbarbersmarket.ie/wp-content/uploads/2017/01/graduate-icon-7835-400x400.png',
          info: 'Educate.'
        },
        {
          img: 'http://wildernessusa.com/wp-content/uploads/2016/03/lightbulb_icon-400x400.png',
          info: 'Idate.'
        },
        {
          img: 'http://cdn2.hubspot.net/hub/211732/file-887614047-png/images/icon-collaborate-720x480.png',
          info: 'Collaborate.'
        }
      ]
    },
    {
      header: 'SEE OUR PAST EVENTS.',
      blueWords: ['PAST', 'EVENTS'],
      gal: [
        "http://placehold.it/640x480",
        "http://www.52dazhew.com/data/out/2/585336423-1600x1200-spring-wallpaper.jpg",
        "data:image/jpeg;base64,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",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgdXHJwUQuGvlpoEfqLG0f4ngMbCaa1ebNtb-5HIEYP-fLiVes",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXFY9uS4ZlZooG7mqtFTwqAyaISPgrC2Y67gwv4oyFb2D-wRDFOw",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFXHvED109FEPK3O_6bC1it746iqrSmlFs4d9e2AmpKiNgwhy5",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbOdgXz2izf0fRvR4aZUCMIh4QSnjw2eKOavS5niBAJEyrXaA14g",
        "https://wallpaper.wiki/wp-content/uploads/2016/09/1920x1080-wallpapers10.jpg",
        "https://cdn.wallpapersafari.com/81/15/uPx4hk.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS0BYvH8C0tbFo4o_izjbUGtQcHcpwW_0Cc-3ECxAj8PIu1zbf",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsYAzVvF1Ce-c0_tzfmVTlF0b0Luz7YNimvh0uWybRA_CMJ2wv",
        "http://www.strategygamer.com/assets/BlogPosts/ss-8baf3ddbf4cc554f6a12374a810d9dda6dc8584c.1920x1080.jpg"
      ]
    },
    {
      header: 'SPEACIAL THANKS.',
      blueWords: ['THANKS'],
      subheader: [
        "We couldn't have done it without you!"
      ],
      recog: [
        {
          img:'https://i.pinimg.com/474x/93/0b/d7/930bd7b9ac8ce383852f51f6630317d2--inspirational-leaders-tesla-motors.jpg',
          name:'Elon Musk',
          description:'SpaceX, Tesla'
        },
        {
          img:'https://s-media-cache-ak0.pinimg.com/originals/28/a2/bb/28a2bb1aa2df7b1e40a2cd2d3ef17621.jpg',
          name:'Mark Zuckerberg',
          description:'FaceSmash.com'
        },
        {
          img:'https://pbs.twimg.com/profile_images/2580143981/i17jfs0bvg2dipb4wm6u_400x400.png',
          name:'Jack Ma',
          description:'FaceSmash.com'
        },
        {
          img:'https://www.drawingnow.com/file/videos/image/how-to-draw-disney-characters-donald-duck.jpg',
          name: 'Donald Duck',
          description:"Disney Duck"
        },
        {
          img:'https://t00.deviantart.net/L5WWTIZiK3MMF_TBPdsngsLQfK8=/300x200/filters:fixed_height(100,100):origin()/pre00/7a66/th/pre/i/2017/285/8/a/shed_a_layer_by_taco_zuzu-dbqeqb2.png',
          name: 'Loki',
          description: 'deserves to be king.'
        },
        {
          img:'http://wallup.net/wp-content/uploads/2016/07/20/22775-minimalism-SpongeBob_SquarePants-300x200.jpg',
          name:'Spongebob Squarepants',
          description: 'well rounded individual'
        },
        {
          img:'http://nrinews24x7.com/wp-content/uploads/2015/02/Spock-Leonard-Nimoy-300x200.jpg',
          name: 'Spock',
          description: 'eh its spock.'
        },
        {
          img: 'https://blogs.babycenter.com/wp-content/uploads/2014/09/Frozen_elsa1-300x200.jpg',
          name: 'Elsa',
          description: 'let it go'
        },
        {
          img:'http://stageentertainment.ca/wp-content/uploads/2014/05/hire-a-santa-clause-300x200.jpeg',
          name: 'Mr.C',
          description: 'ruined my childhood'
        }
      ]
    },
    {
      header: 'MOST OF ALL, THANK YOU.',
      blueWords: ['YOU']
    }
  ]
}

export default data;