import React from "react";
import Link from "next/link";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { BsArrowRight } from "react-icons/bs";
import { useTheme } from "../layout";
import Image from "next/image";

export const Projects = ({ data }) => {
  const theme = useTheme();
  const titleColorClasses = {
    blue: "group-hover:text-blue-600 dark:group-hover:text-blue-300",
    teal: "group-hover:text-teal-600 dark:group-hover:text-teal-300",
    green: "group-hover:text-green-600 dark:group-hover:text-green-300",
    red: "group-hover:text-red-600 dark:group-hover:text-red-300",
    pink: "group-hover:text-pink-600 dark:group-hover:text-pink-300",
    purple: "group-hover:text-purple-600 dark:group-hover:text-purple-300",
    orange: "group-hover:text-orange-600 dark:group-hover:text-orange-300",
    yellow: "group-hover:text-yellow-500 dark:group-hover:text-yellow-300",
  };

  return (
    <>
      {data.map((postData) => {
        const post = postData.node;
        return (
          <Link
            key={post._sys.filename}
            href={`/projects/` + post._sys.filename}
            passHref
          >
            <a
              key={post.id}
              className="grid grid-cols-1 md:grid-cols-8 px-6 sm:px-8 md:px-10 py-10 mb-8 last:mb-0 bg-gray-50 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-1000 rounded-md shadow-sm transition-all duration-150 ease-out hover:shadow-md hover:to-gray-50 dark:hover:to-gray-800"
            >
              <div className="flex col-span-2 w-full justify-center">      
                {
                  post.thumbnail &&
                    <Image src={post.thumbnail} height="150px" width="150px"/>
                }
              </div>
              <div className="flex flex-col col-span-6 md:self-center pt-5 md:pt-0">
                <h3
                  className={`text-center md:text-left text-gray-700 dark:text-white text-3xl lg:text-4xl font-semibold title-font mb-5 transition-all duration-150 ease-out ${
                    titleColorClasses[theme.color]
                  }`}
                >
                  {post._values.name}
                </h3>
                <div className="prose dark:prose-dark w-full max-w-none mb-5 opacity-70">
                  <TinaMarkdown content={post._values.excerpt} />
                </div>
              </div>
            </a>
          </Link>
        );
      })}
    </>
  );
};
