import { Button, Label, TextInput, Textarea } from "flowbite-react";

const Review = () => {
  return (
    <>
      <div>
        <div>
          <h2>There ane no review yet</h2>
          <p>Be the first to review “Audio Pro Pearl White XL2”</p>
          <p>
            Your email address will not be published. Required fields are marked
            *
          </p>
          <p>Your rating *</p>
        </div>
        <form className=" pt-4">
          <div className="max-w-md">
            <div className="mb-2 block">
              <Label
                htmlFor="comment"
                value="Your message"
                className=" font-bold text-xl"
              />
            </div>
            <Textarea
              id="comment"
              placeholder="Leave a comment..."
              required
              rows={4}
            />
          </div>
          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="username3" color="success" value="Your name" />
            </div>
            <TextInput
              id="username"
              placeholder="Enter your name.."
              required
              color="success"
            />
          </div>
          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="email4" value="Your email" />
            </div>
            <TextInput
              id="email4"
              type="email"
              placeholder="Enter your email address"
              required
            />
          </div>
          <Button color="gray" className=" mt-5 bg-red-800 text-white">
            Profile
          </Button>
        </form>
      </div>
    </>
  );
};

export default Review;
