import React from "react";
import { div, Button } from "@mui/material";

const courses_data = [
    {
        title: "Introduction to Python for Machine Learning",
        audience: "Beginners with no experience in Python"
    },
    {
        title: "Introduction to Deep Learning",
        audience: "Beginners in the field of DL",
        prerequisites: "Intro to Python for ML course"
    },
    {
        title: "Computer Vision",
        audience: "Intermediate learners with experience in DL",
        prerequisites: "Intro to DL"
    },
    {
        title: "Building AI projects and a Strong Portfolio",
        audience: "People looking to transition into AI",
        prerequisites: "None",
        description: "Establish your social presence in th world of AI with Kaggle, Github, Linkedin & X"
    },
    {
        title: "Generative AI for Beginners",
        audience: "People with basic knowledge of ML & DL, or looking to enter the field of GenAI"
    },{
        title: "Generative AI for Non-Tech Founders",
        audience: "Non-Tech founders who would like to know more about GenAI & how they can leverrage it for their usecases"
    }
]

const Courses = () => {
  return (
    <div className=" py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div
          variant="h4"
          className="text-gray-900 text-center mb-8 font-bold text-3xl "
        >
          Explore Our Courses
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses_data.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-200"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 flex justify-center items-center bg-gray-100 rounded-full text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 16l-4-4m0 0l4-4m-4 4h16M12 4v16"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {course.title}
                </h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                <span className="font-bold text-gray-700">Who can take: </span>
                {course.audience}
              </p>
              {course.prerequisites && (
                <p className="text-sm text-gray-600 mb-3">
                  <span className="font-bold text-gray-700">
                    Prerequisite:{" "}
                  </span>
                  {course.prerequisites}
                </p>
              )}
              {course.description && (
                <p className="text-sm text-gray-600 mb-4">
                  {course.description}
                </p>
              )}
              <button className="w-full bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition-colors duration-200 text-sm font-medium">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses
