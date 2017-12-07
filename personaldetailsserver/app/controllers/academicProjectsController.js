var app = require('../../app');

exports.getAcademicProjects = function(req, res) {
    con.connect(function(err) {			
		var sql = " SELECT * FROM `projects` where type = 'academic'" ;
		con.query(sql, function (error, result) {
			var response;
			if (error) 
			{
				response = {					
					Error: true,
					ErrorMessage : "Failed to retrive Record."
				};							
			}
			else
			{	
				response = {
					Success : true,
					SuccessMessage: "Records retrived successfully",
					data: result					
				};					
			}	
			res.json(response);
		});
	});
}