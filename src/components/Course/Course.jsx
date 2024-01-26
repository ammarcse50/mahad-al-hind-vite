import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const Course = ({ course }) => {
  const { cover, title, author,download_link } = course;

  return (
    <>
      <Card className=" mb-10 w-86">
        <CardHeader color="green" className="relative h-56 mt-6">
          <img src={cover} alt="card-image" width={400} />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {title}
          </Typography>
          <Typography>{author}</Typography>
        </CardBody>
        <CardFooter className="pt-0 text-center">
          <a href={download_link}>
         
            <Button>Download</Button>
          </a>
        </CardFooter>
      </Card>
    </>
  );
};

export default Course;
