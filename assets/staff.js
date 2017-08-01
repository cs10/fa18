// Instructors

var DanGarcia = {
    name: 'Teaching Professor Dan Garcia',
    img: 'DanGarciaUCBFaculty2004.jpg',
    imgSrc: 'DanGarcia.jpg',
    imgCrazy: true,
    web: 'http://www.cs.berkeley.edu/~ddgarcia/',
    bio: 'DanBio',
    email: 'dan@cs10.org',
    office: '777 Soda, (510) 517-4041'
};

// TAs


var jobelV = {
    name: 'Head TA Jobel Vecino',
    img: 'Fa13/JobelVecino.jpg',
    imgSrc: 'JobelVecino.jpg',
    bio: 'JobelBio',
    email: 'jobel@cs10.org',
    web: 'https://www.linkedin.com/in/jobel-kyle-vecino-b2841879/'
};

var laraM = {
    name: 'Head TA Lara McConnaughey',
    img: '../Sp17/LaraMcConnaughey.jpg',
    imgSrc: 'LaraMcConnaughey.jpg',
    imgCrazy: '../small/LaraMcConnaugheyCrazy.jpg',
    web: 'http://laralinmcc.github.io/',
    bio: 'LaraBio',
    email: 'lara@cs10.org'
};

var mansiS = {
    name: 'Head TAiT Mansi Shah',
    img: 'MansiShah.jpg',
    imgSrc: '../Sp17/MansiShah.jpg',
    email: 'mansi@cs10.org',
    bio: 'MansiBio'
};

var addisonH = {
    name: 'TA Addison Howe',
    img: 'Fa16/AddisonHowe.JPG',
    imgSrc: '../Fa16/AddisonHowe.JPG',
    email: 'addison@cs10.org',
    bio: ''
};

var angelaW = {
    name: 'TA Angela Wong',
    img: 'Su17/AngelaWong.jpg',
    imgSrc: '../Su17/AngelaWong.jpg',
    email: 'angela@cs10.org',
    bio: 'AngelaBio'
};

var christianL = {
    name: 'TA Christian Lista-Nicoloso',
    img: 'Christian Lista-Nicoloso.JPG',
    bio: 'ChristianBio',
    imgSrc: '../Fa16/Christian Lista-Nicoloso.JPG',
    email: 'christian@cs10.org'
};

var jessicaG = {
    name: 'TA Jessica Gao',
    imgSrc: '../small/NPY.jpg',
    img: 'NPY.jpg.jpg',
    //bio: 'MatthewBio'
};

var matthewS = {
    name: 'TA Matthew Schwartz',
    img: 'Fa16/MatthewSchwartz.JPG',
    imgSrc: '../Fa16/MatthewSchwartz.JPG',
    bio: 'MatthewBio'
};

var meghnaD = {
    name: 'TA Meghna Dasgupta',
    img: 'Fa16/MeghnaDasgupta.jpg',
    imgSrc: '../Fa16/MeghnaDasgupta.jpg',
    email: 'meghna@cs10.org'
};

var patriciaX = {
    name: 'TA Patricia Xiao',
    img: '../Sp17/PatriciaXiao.jpg',
    imgSrc: '../Sp17/PatriciaXiao.jpg',
    email: 'patricia@cs10.org',
    bio: 'PatriciaBio'
};

var samuelS = {
    name: 'TA Samuel Starks',
    img: 'Fa16/SamStarks.jpg',
    imgSrc: '../Fa16/SamStarks.jpg',
    bio: 'SamBio'
};

var yifatA = {
  name: 'TA Yifat Amir',
  img: 'Su17/YifatAmir.jpg',
  imgSrc: '../Sp17/YifatAmir.jpg',
  imgCrazy: '../small/YifatAmirCrazy.jpg',
  bio: 'YifatBio',
  web: 'https://www.linkedin.com/in/yifat-amir-45633584',
  email: 'yifat@cs10.org'
};

// Readers
var arvindN = {
    name: 'Reader Arvind Nandakumar',
    imgSrc: '../Sp17/las/ArvindNandakumar.jpg',
    img: 'ArvindNandakumar.jpg'
};

var bhumikaG = {
    name: 'Reader Bhumika Goel',
    imgSrc: '../Su17/BhumikaGoel.jpg',
    img: 'BhumikaGoel.jpg',
    bio: 'BhumikaBio'
};

var julieH = {
    name: 'Reader Julie Han',
    imgSrc: '../small/NPY.jpg',
    img: 'NPY.jpg.jpg',
    bio: 'JulieBio'
};

var niketK = {
    name: 'Reader Niket Kulkarni',
    imgSrc: '../small/NPY.jpg',
    img: 'NPY.jpg.jpg'
};


/*****************************************************************************/
/** LIST DEFINITIONS **/
/*****************************************************************************/

var inst = [ DanGarcia ];
var tas = [ jobelV, laraM, mansiS, addisonH, angelaW, christianL, jessicaG, matthewS, meghnaD, patriciaX, samuelS, yifatA ];
var readers = [ arvindN, bhumikaG, julieH, niketK ];

// If you need to add a new SECTION add it to this object.
// Follow the same format.
var all = {
    readers: readers,
    tas: tas,
    inst: inst
};

/*****************************************************************************/
/* DATA POPULATION FUNCTIONS  */
/*****************************************************************************/

// Build a basic object for a person from the current semester.
function baseObj(name, baseDir) {
    var src = name.replace(/ /g , '');
    var baseDir = baseDir || 'Sp14/';
    return { name: name,
             img: baseDir + src + '.jpg',
             imgSrc: src + '.jpg' };
}

function buildPerson(data, width) {
    var imgPathBase, imgPath, cls, elm, crazyPath;
    // Given a JSON object build a div that contains all the person's info
    // width is used to control how many are on a row on the page.
    // Build data objects for very simple cases with nothing special.
    if (data.constructor === String) {
        data = baseObj(data);
    }
    // when developing load images from a submodule, else load from /resources
    var hostName = window.location.hostname;
    if (hostName === 'localhost' || hostName == '127.0.0.1') {
        imgPathBase = '{{ site.baseurl }}'
    } else {
        imgPathBase = '';
    }
    imgPath = imgPathBase + '/resources/images/small/' + data.imgSrc;
    // Date Hacks for fun!
    if (Date().substr(4, 6) == 'Apr 01') {
        imgPath = 'https://www.cs.berkeley.edu/~ddgarcia/i/DanGarciaUCBFaculty2004Eyebrow_320.jpg';
    }
    // Create a div with this person's data, setting a class for width
    // Col-md- is based on standard bootstrap classes, md-20 is my own addition.
    cls = 'col-md-' + (width === 5 ? '20' : Math.floor(12/width));
    elm = '<div class="'+ cls + '">';
    if (data.img) {
        elm += '<a href="' + imgPathBase + '/resources/images/' + data.img + '">';
    }
    elm += '<img class="staff" align="center" ';
    elm += 'alt=" Staff Photo: ' + data.name + '" title="' + data.name + '" src="';
    elm += imgPath + '"';
    if (data.imgCrazy) {
        crazyPath = imgPath.replace('.jpg', 'Crazy.jpg');
        elm += ' onmouseenter="crazyImage(this, ' + " '" + crazyPath + "'" + ')"';
        elm += ' onmouseleave="normalImage(this,' + " '" + imgPath + "'" + ')"';
    }
    elm += '/>';
    if (data.img) {
        elm += '</a>';
    }
    elm += '<br><strong>';
    if (data.web) {
        elm += '<a href="' + data.web + '" target="_blank">' + data.name + '</a>';
    } else {
        elm += data.name;
    }
    elm += '</strong> ';
    if (data.bio) {
        elm += '(<a href="{{ site.baseurl }}/bios/' + data.bio + '">bio</a>)';
    }
    if (data.email) {
        elm += '<br><a href="mailto:' + data.email +
        '?subject=[CS10] SUBJECT"><code>' + data.email + '</code></a>';
    }
    if (data.office) {
        elm +=  '<br>' + data.office;
    }
    elm += '</div>';
    return elm;
}

function buildGroup(group, w) {
    // Create image elements for all photos in the group (HTML ID)
    // with a WIDTH of w photos per row.
    var ppl = all[group];
    var doc = document.getElementById(group);
    var content = '';
    for (var i = 0; i < ppl.length; i += w) {
        content += '<div class="row staffimgrow">';
        for (var j = i; j < (i + w) && j < ppl.length; j += 1) {
            if (i + w > ppl.length) {
                 w = ppl.length - i;
             }
            content += buildPerson(ppl[j], w);
        }
        content += '</div>';
        content += '<div class="clearfix"></div>';
    }
    doc.innerHTML += content;
}

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    };
  }
}

function crazyImage(image, crazyPath) {
    image.src = crazyPath;
}

function normalImage(image, normalPath) {
    image.src = normalPath;
}

/* more code to run on page load */
// Parameters: a section (HTML 'id') and num of images per row.
buildGroup('inst', 5);
buildGroup('tas', 5);
buildGroup('readers', 5);
