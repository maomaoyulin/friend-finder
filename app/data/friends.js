// ===============================================================================
// DATA
// Below data will hold all of the friends on Friend Finder
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================


var friendData = [
	{
		name: "Arnold Scharzenegger",
		photo: '<a href="http://tinypic.com?ref=suyaeu" target="_blank"><img src="http://i65.tinypic.com/suyaeu.jpg" border="0" alt="Image and video hosting by TinyPic"></a>',
		scores: [3,3,3,3,3,3,3,3,3,3]
	},
     {
		name: "Sylvester Stallone",
		photo: '<a href="http://tinypic.com?ref=fns4eb" target="_blank"><img src="http://i64.tinypic.com/fns4eb.jpg" border="0" alt="Image and video hosting by TinyPic"></a>',
		scores: [4,4,4,4,4,4,4,4,4,4]
	},
     {
		name: "Mila Jovivich",
		photo: '<a href="http://tinypic.com?ref=2w30s1y" target="_blank"><img src="http://i67.tinypic.com/2w30s1y.jpg" border="0" alt="Image and video hosting by TinyPic"></a>',
		scores: [5,5,5,5,5,5,5,5,5,5]
	}
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendData;
