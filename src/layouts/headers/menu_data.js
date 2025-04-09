const menu_data = [
	{
	  id: 1,
	  title: "Home",
	  link: "/",
	  has_dropdown: false,
	},
	{
	  id: 2,
	  title: "About",
	  link: "/about",
	  has_dropdown: false,
	},
	{
	  id: 3,
	  title: "Projects",
	  link: "#",
	  has_dropdown: true,
	  sub_menus: [
		{ link: "/projects", title: "Projects List" },
	  ],
	},
	{
	  id: 4,
	  title: "Contact",
	  link: "/contact",
	  has_dropdown: false,
	},
  ];
  
  export default menu_data;
  