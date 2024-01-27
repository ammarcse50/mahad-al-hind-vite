import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const Course = ({ course }) => {
  const { cover, title, contact, desc } = course;

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
          <Typography>{desc}</Typography>
        </CardBody>
        <CardFooter className="pt-0 text-center">
          <a href={contact}>
            <Button>Contact Us</Button>
          </a>
        </CardFooter>
      </Card>
    </>
  );
};

export default Course;
