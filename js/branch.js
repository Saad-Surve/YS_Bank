var state_arr = new Array("Maharashtra","Uttar Pradesh","Karnataka","Madhya Pradesh","Gujarat");

var s_a = new Array();
s_a[0]="";
s_a[1]="Mumbai| Pune| Nagpur| Thane| Kalyan";
s_a[2]="Kanpur| Lucknow| Meerut| Ghaziabad| Agra";
s_a[3]="Banglore| Mysore| Mangalore| Raichur| Vijayapura";
s_a[4]="Indore| Bhopal| Ujjain| Gwaliior";
s_a[5]="Ahemdabad| Surat| Vadodra| Rajkot| Bhavnagar";


function print_state(state_id){
	// given the id of the <select> tag as function argument, it inserts <option> tags
	var option_str = document.getElementById(state_id);
	option_str.length=0;
	option_str.options[0] = new Option('Select State','');
	option_str.selectedIndex = 0;
	for (var i=0; i<state_arr.length; i++) {
		option_str.options[option_str.length] = new Option(state_arr[i],state_arr[i]);
	}
}

function print_city(city_id, city_index){
	var option_str = document.getElementById(city_id);
	option_str.length=0;	// Fixed by Julian Woods
	option_str.options[0] = new Option('Select City','');
	option_str.selectedIndex = 0;
	var city_arr = s_a[city_index].split("|");
	for (var i=0; i<city_arr.length; i++) {
		option_str.options[option_str.length] = new Option(city_arr[i],city_arr[i]);
	}
}