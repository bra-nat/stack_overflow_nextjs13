import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";

export default function Home() {
  const questions = [
    {
      _id: "1",
      title: "Redux Toolkit Not Updating State as Expected",
      tags: [
        { _id: "1", name: "Javascript" },
        { _id: "2", name: "Javascript" },
      ],
      author: {
        _id: "3",
        name: "Nathaniel Aidoo",
        picture: "url-to-picture",
      },
      upvotes: 5,
      answers: [],
      views: 12220000,
      createdAt: new Date("2023-11-15T12:30:00Z"),
    },
    {
      _id: "2",
      title: "How do ES6 module exports and imports work in",
      tags: [
        { _id: "4", name: "Redux" },
        { _id: "5", name: "Python" },
      ],
      author: {
        _id: "6",
        name: "Nathaniel",
        picture: "url-to-picture",
      },
      upvotes: 2500000,
      answers: [],
      views: 180000,
      createdAt: new Date("2023-01-15T12:30:00Z"),
    },
  ];

  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilters />
      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There's no question to show"
            description="Be the first to break the silence!🚀 Ask a question and kickstart the discussion. Your query could be the next big thing others learn from. Get involved!💡"
            link="/"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
