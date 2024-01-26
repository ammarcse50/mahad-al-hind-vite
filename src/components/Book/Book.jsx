import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const Book = ({ book }) => {
  const { cover, title } = book;
  return (
    <div>
      <Card className=" mb-10 w-86">
        <CardHeader color="green" className="relative h-56 mt-6">
          <img src={cover} alt="card-image" width={400} />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {title}
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
};

Book.propTypes = {};

export default Book;
