var app = require('../../app');
//var QualificationsModel = require('../models/QualificationsModel');
//console.log(QualificationsModel);
//console.log(QualificationsModel.ExaminationName);
exports.getQualifications = function(req, res) {
    // var data = [{
    //     ExaminationName: 'ss',
    //     University: 'ss',
    //     YearOfPassing: 'ss',
    //     Percentage: 'ss'
    // }];
    // response = {
    //     Success : true,
    //     Data: data,
    //     SuccessMessage: "Record added successfully."
    // };
    // res.send(response);
    con.connect(function(err) {			
		var sql = " SELECT * FROM `qualifications`" ;
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
				// var qualificationsDetailsModel = [];
				// for(var resRow of result){
				// 	//var QualificationsModel = new QualificationsModel();
				// 	QualificationsModel.ExaminationName = resRow.ExaminationName;
				// 	QualificationsModel.University = resRow.University;
				// 	QualificationsModel.YearOfPassing = resRow.YearOfPassing;
				// 	QualificationsModel.Percentage = resRow.Percentage;
                //     console.log(QualificationsModel);
				// 	qualificationsDetailsModel.push(QualificationsModel);
				// }
                // console.log(qualificationsDetailsModel);
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