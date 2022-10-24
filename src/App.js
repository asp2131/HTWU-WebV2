import React, { useState } from "react";
import { LessonPlayer } from "./LessonPlayer";
import { LessonMaterials } from "./LessonMaterials";
import { LessonAbout } from "./LessonAbout";
import { LessonIncluded } from "./LessonIncluded";
import NavItems from "./NavItems-10.json";
import dataIM3 from "./LessonData-IM3.json";
import dataIM6 from "./LessonData-IM6.json";
import dataEL3 from "./LessonData-EL3.json";
import dataEL8 from "./LessonData-EL8.json";
import {
  MenuIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ColorSwatchIcon,
  PencilAltIcon,
  PencilIcon,
  DuplicateIcon,
  ShareIcon,
  PrinterIcon,
  CodeIcon,
  PlusIcon,
  StatusOnlineIcon,
  SearchIcon,
  UserCircleIcon,
  TemplateIcon,
  HeartIcon,
  XIcon,
  ChatAlt2Icon,
  CheckIcon,
  SwitchHorizontalIcon,
  EyeIcon,
  ArrowUpIcon
} from "@heroicons/react/outline";
import { Dropdown } from "semantic-ui-react";

export default function App() {
  const [edit, setEdit] = useState(false);
  const [tab, setTab] = useState("plan");
  const [data, setData] = useState(dataIM6);
  const [accord, setAccord] = useState(0);
  const [accordChild, setAccordChild] = useState(6);
  const [contentOn, setContentOn] = useState(true);
  //change to true for cover
  const [coverOn, setCoverOn] = useState(false);

  const changeData = (data) => {
    setCoverOn(true);
    setContentOn(false);
    setData(data);
    setTimeout(() => setContentOn(true), 1000);
  };

  return (
    <div
      className={`App min-h-screen bg-[#E9EDF8] text-[#272465] ${
        coverOn ? "overflow-hidden h-screen" : ""
      }`}
    >
      <style>
        {`
        body > iframe {
          display: none !important;
        }
        .btn {
          border-radius: 0.67rem;
          background: #F5F8FF;
          box-shadow: 0 0.25em 0 #BAC9FF;
          font-weight: 600;
          transition: background ease 0.25s, box-shadow ease 0.25s;
          border: 1px solid #BAC9FF;
          font-size: 1rem;
          cursor: pointer;
        }
        .btn.btn-md {
          font-size: 1.25rem;
        }
        .btn.btn-lg {
          font-size: 1.5rem;
        }
        .btn.btn-sm {
          box-shadow: 0 0.15em 0 #c8d4ff;
        }
        .btn.btn-sm:active {
          box-shadow: 0 1px 0 #c8d4ff;
        }
        .btn:hover {
          background: #fff;
          box-shadow: 0 0.33em 0.5em -0.15em #BAC9FF;
        }
        .btn:active {
          box-shadow: 0 2px 0 #BAC9FF;
        }
        .btn.btn-green {
          background: #65D183;
          box-shadow: 0 0.25em 0 #2bb159;
          border-color: #2bb159;
        }
        .btn.btn-green:hover {
          background: #33c65c;
          box-shadow: 0 0.33em 0.5em -0.15em #2bb159;
        }
        .btn.btn-green:active {
          box-shadow: 0 2px 0 #2bb159;
        }
        a {
          cursor: pointer;
        }
        .dropdown {
          position: relative;
        }
        .dropdown.feedback {
          position: fixed;
          display: none;
        }
        .dropdown.feedback .menu {
          background: #f5f7ff;
          font-size: 1.075em;
          border: 1px solid #a9b5f0;
        }
        .dropdown.feedback input, .dropdown.feedback textarea {
          padding: 0.75em 1em;
          border-radius: 0.5em;
          box-shadow: 0 0 0 1px rgba(0,0,0,0.0875), 0 2px 6px -2px rgba(0,0,0,0.15);
          min-width: 24em;
          font-size: 1.075em;
        }
        .dropdown.feedback input:focus, .dropdown.feedback textarea:focus {
          box-shadow: 0 0 0 1px #2bb159;
        }
        .dropdown .menu {
          position: absolute;
          opacity: 0;
          top: calc(100% + 0.5rem);
          right: 0;
          background: white;
          border-radius: 0.75rem;
          z-index: -1;
          margin-top: -0.5rem;
          transition: all ease 0.15s;
          padding: 0.5rem;
          pointer-events: none;
        }
        .dropdown.upward .menu {
          top: auto;
          bottom: calc(100% + 0.5rem)
        }
        .dropdown.centered .menu {
          right: auto;
          left: auto;
        }
        .dropdown.dark .menu {
          background: #272465;
        }
        .dropdown .menu.visible {
          opacity: 1;
          z-index: 100;
          margin-top: 0;
          pointer-events: auto;
        }
        .dropdown .menu .item {
          white-space: nowrap;
        }
        .dropdown .menu .item > span, .dropdown .menu .item > div {
          padding-right: 1em;
        }
        header .dropdown .menu {
          background: transparent;
          box-shadow: none;
        }
        header .dropdown .menu.visible .nav-drawer {
          margin-left: 0;
        }
        .accordion ul, .accordion li {
          transition: all ease 0.25s;
          margin: 0.175em 0;
        }
        .accordion > li {
          margin: 0;
        }
        .accordion-child, .accordion-grandchild {
          display: none;
        }
        .accordion li.active > ul, .accordion-child li.active > ul {
          display: flex;
        }
        .show, .hide {
          animation-duration: 0.375s;
          animation-fill-mode: forwards;
        }
        .show {
          animation-name: show;
          pointer-events: auto;
        }
        .delay {
          animation-delay: 1s;
        }
        li.IM-Kindergarten {
          margin-top: 1.25em;
        }
        .showHalf {
          animation-name: showHalf;
          animation-duration: 1s;
          animation-fill-mode: forwards;
        }
        .hide {
          animation-name: hide;
          pointer-events: none;
        }
        @keyframes show {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes showHalf {
          from {
            opacity: 0;
          }       
          to {
            opacity: 0.67;
          }
        }
        @keyframes hide {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }
        .reveal-col.col-2 {
          animation-delay: 0.075s;
          animation-duration: 0.5s;
        }
        .reveal-col.col-3 {
          animation-delay: 0.15s;
          animation-duration: 0.64s;
        }
        .reveal-col.col-4 {
          animation-delay: 0.225s;
          animation-duration: 0.825s;
        }
        .reveal-col.col-5 {
          animation-delay: 0.3s;
          animation-duration: 1s;
        }
        .slideUp {
          opacity: 0;
          animation-name: slideUp;
          animation-duration: 0.3s;
          animation-fill-mode: forwards;
          transform-origin: center bottom;
        }
        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: none;
            opacity: 1;
          }
        }
        `}
      </style>
      <header
        className={`shadow-md bg-white flex h-[4.5rem] ${edit ? "" : ""}`}
      >
        <div className="flex items-center">
          <div className="flex items-center top-0">
            <Dropdown
              className=""
              trigger={
                <div className="py-5 px-5 mr-2 cursor-pointer hover:bg-[rgba(79,71,243,0.075)]">
                  <MenuIcon className="h-8 w-8" />
                </div>
              }
            >
              <Dropdown.Menu>
                <nav
                  className={`nav-drawer transition-all fixed top-0 -ml-96 z-20 left-0 h-screen w-96`}
                >
                  <div className="bg-[#4F47F3] h-[4.5rem] w-[4.5rem] transition-colors cursor-pointer hover:bg-[#272465] flex items-center justify-center">
                    <XIcon className="h-10 w-10 text-white" />
                  </div>
                  <div className="bg-white absolute mt-[4.5rem] top-0 left-0 w-full h-[calc(100%-4.5rem)] shadow-[0.15em_-0.15em_1em_rgba(0,0,0,0.085)] overflow-y-scroll">
                    <ul className="mt-2 w-full accordion flex flex-col">
                      {NavItems.map((navItem, index) => (
                        <li
                          className={`flex flex-col w-full items-center text-lg py-1 px-2 transition-colors cursor-pointer curr-${
                            navItem.curr
                          } ${navItem.curr}-${navItem.name} ${
                            accord === index ? "active" : ""
                          }`}
                        >
                          <div className="flex w-full items-center">
                            <div
                              className="p-2 hover:bg-[rgba(79,71,243,0.075)] rounded-lg"
                              onClick={(event) => {
                                event.stopPropagation();
                                setAccord(accord === index ? null : index);
                                setAccordChild(null);
                              }}
                            >
                              {navItem.child ? (
                                <ChevronRightIcon
                                  className={`h-5 w-5 text-[#4F47F3] ${
                                    accord === index ? "-rotate-90" : ""
                                  }`}
                                />
                              ) : null}
                            </div>
                            <div
                              className={`p-2 hover:bg-[rgba(79,71,243,0.075)] flex-1 rounded-lg flex items-center`}
                            >
                              {navItem.logo ? (
                                <img
                                  className="h-5 w-5 inline-flex mr-3"
                                  src={navItem.logo}
                                  alt="curriculum logo"
                                />
                              ) : null}
                              {navItem.name}
                            </div>
                          </div>
                          <ul className="ml-2 w-full accordion-child flex flex-col pl-2">
                            {navItem.child.map((navItemChild, indexChild) => (
                              <li
                                className={`flex flex-col items-center text-lg px-2 transition-colors cursor-pointer ${
                                  accordChild === indexChild ? "active" : ""
                                }`}
                              >
                                <div className="flex w-full items-center text-[0.925em]">
                                  {navItemChild.child ? (
                                    <div
                                      className="p-2 hover:bg-[rgba(79,71,243,0.075)] rounded-lg"
                                      onClick={(event) => {
                                        event.stopPropagation();
                                        setAccordChild(
                                          accordChild === indexChild
                                            ? null
                                            : indexChild
                                        );
                                      }}
                                    >
                                      <ChevronRightIcon
                                        className={`h-5 w-5 text-[#4F47F3] ${
                                          accordChild === indexChild
                                            ? "-rotate-90"
                                            : ""
                                        }`}
                                      />
                                    </div>
                                  ) : (
                                    <div className="ml-9" />
                                  )}
                                  <div className="p-2 hover:bg-[rgba(79,71,243,0.075)] flex-1 rounded-lg ">
                                    {navItemChild.name}
                                  </div>
                                </div>
                                <ul className="pl-12 mb-2 w-full accordion-grandchild flex flex-col">
                                  {navItemChild.child
                                    ? navItemChild.child.map(
                                        (navItemGrandchild) => (
                                          <li className="flex items-center text-lg px-2 transition-colors cursor-pointer">
                                            <div className="flex flex-1 items-center">
                                              <div className="p-2 hover:bg-[rgba(79,71,243,0.075)] flex-1 rounded-lg ">
                                                {navItemGrandchild.name}
                                              </div>
                                            </div>
                                          </li>
                                        )
                                      )
                                    : null}
                                </ul>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                    <button className="btn btn-sm px-6 py-1 mx-[5%] w-[90%] my-4">
                      Customize navigation
                    </button>
                    <div className="sticky bottom-0 bg-[#f4f6fe]">
                      <label className="flex mt-4 pt-6 border-t border-t-blue-200 text-sm pl-6">
                        Links
                      </label>
                      <ul className="p-2">
                        <li
                          className="flex items-center text-lg p-2 hover:bg-[rgba(79,71,243,0.075)] rounded-lg transition-colors cursor-pointer"
                          onClick={() => changeData(dataIM3)}
                        >
                          <span className="ml-2 flex items-center">
                            {data === dataIM3 ? (
                              <CheckIcon className="h-6 w-6 mr-2 text-green-500" />
                            ) : null}
                            Example: IM Grade 3 Lesson
                          </span>
                        </li>
                        <li
                          className="flex items-center text-lg p-2 hover:bg-[rgba(79,71,243,0.075)] rounded-lg transition-colors cursor-pointer"
                          onClick={() => changeData(dataIM6)}
                        >
                          <span className="ml-2 flex items-center">
                            {data === dataIM6 ? (
                              <CheckIcon className="h-6 w-6 mr-2 text-green-500" />
                            ) : null}
                            Example: IM Grade 6 Lesson
                          </span>
                        </li>
                        <li
                          className="flex items-center text-lg p-2 hover:bg-[rgba(79,71,243,0.075)] rounded-lg transition-colors cursor-pointer"
                          onClick={() => changeData(dataEL3)}
                        >
                          <span className="ml-2 flex items-center">
                            {data === dataEL3 ? (
                              <CheckIcon className="h-6 w-6 mr-2 text-green-500" />
                            ) : null}
                            Example: EL Grade 3 Lesson
                          </span>
                        </li>
                        <li
                          className="flex items-center text-lg p-2 hover:bg-[rgba(79,71,243,0.075)] rounded-lg transition-colors cursor-pointer"
                          onClick={() => changeData(dataEL8)}
                        >
                          <span className="ml-2 flex items-center">
                            {data === dataEL8 ? (
                              <CheckIcon className="h-6 w-6 mr-2 text-green-500" />
                            ) : null}
                            Example: EL Grade 8 Lesson
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </Dropdown.Menu>
            </Dropdown>
            <img className="ml-1 object-contain h-48 w-48" src={"https://res.cloudinary.com/https-pilot-tune-herokuapp-com/image/upload/v1666457638/htwu-logo_qvw5ft.png"} alt="Logo" />
          </div>
        </div>
        <div className="flex-1 flex items-center justify-end pr-8">
          <ul className="main-nav flex items-center space-x-8">
            <li>
              <span
                href="/"
                className="text-lg font-semibold transition-colors hover:text-[#4F47F3] cursor-pointer"
              >
                Home
              </span>
            </li>
            <li>
              <span
                href="/"
                className="text-lg font-semibold transition-colors hover:text-[#4F47F3] cursor-pointer"
              >
                Classes
              </span>
            </li>
            <li>
              <span
                href="/"
                className="text-lg font-semibold transition-colors hover:text-[#4F47F3] cursor-pointer"
              >
                Data
              </span>
            </li>
            <li>
              <span
                href="/"
                className="text-lg font-semibold transition-colors hover:text-[#4F47F3] cursor-pointer"
              >
                Favorites
              </span>
            </li>
            <li>
              <span
                href="/"
                className="text-lg font-semibold transition-colors hover:text-[#4F47F3] cursor-pointer"
              >
                Help
              </span>
            </li>
            <li>
              <span
                href="/"
                className="text-lg font-semibold transition-colors hover:text-[#4F47F3] cursor-pointer"
              >
                <SearchIcon className="h-6 w-6" />
              </span>
            </li>
            <li>
              <span className="text-lg font-semibold transition-colors hover:text-[#4F47F3] inline-flex rounded-full p-2 bg-[#E9EEFF]  cursor-pointer">
                <UserCircleIcon className="h-6 w-6" />
              </span>
            </li>
          </ul>
        </div>
      </header>
      {data ? (
        <div
          className={`content transition-all pt-12 flex flex-wrap max-w-7xl 2xl:max-w-[85rem] m-auto px-6 opacity-0 delay ${
            contentOn ? "show" : "hide"
          }`}
        >
          {data.crumbs && !edit ? (
            <div className="lesson-crumbs w-full -mt-4 mb-10">
              <ul className="flex items-center space-x-4">
                {data.crumbs.map((crumb) => (
                  <li className="text-sm relative bg-white border border-1 border-[#c8d4ff] btn btn-sm inline-flex">
                    <div className="py-1.5 px-4 text-[#635ddd] hover:bg-[#4F47F3] hover:text-white transition-colors cursor-pointer rounded-l-lg">
                      <div className="whitespace-nowrap overflow-hidden text-ellipsis max-w-[10rem] overflow-hidden">
                        {crumb.name}
                      </div>
                    </div>
                    {crumb.children ? (
                      <div className="inline-flex items-center border-1 border-l border-blue-100 hover:bg-[#4F47F3] hover:text-white transition-colors rounded-r-lg cursor-pointer">
                        <Dropdown
                          trigger={
                            <ChevronDownIcon className="h-8 w-8 py-1.5 pl-1.5 pr-2" />
                          }
                        >
                          <Dropdown.Menu className="max-h-96 overflow-y-scroll min-w-full flex flex-col shadow-lg">
                            {crumb.children.map((child) => (
                              <Dropdown.Item className="text-[#272465] w-full p-2 text-sm whitespace-nowrap shrink-0 items-center hover:bg-[rgba(79,71,243,0.075)] inline-flex rounded-lg transition-colors">
                                {child.type === "Lesson" ? (
                                  <img
                                    src="images/icon-lesson.png"
                                    className="h-8 w-8 mr-2"
                                    alt={child.type}
                                  />
                                ) : child.type === "Assessment" ? (
                                  <img
                                    src="images/icon-assessment.png"
                                    className="h-8 w-8 mr-2"
                                    alt={child.type}
                                  />
                                ) : child.type === "Page" ? (
                                  <TemplateIcon className="h-7 w-7 d text-orange-600 mr-3" />
                                ) : null}
                                <div className="max-w-[10rem] overflow-hidden text-ellipsis pr-4">
                                  {child.name}
                                </div>
                              </Dropdown.Item>
                            ))}
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          <div className="lesson-title my-4 flex items-start w-[calc(100%-20rem)]">
            <div className="flex-1">
              <h2
                className={`text-3xl flex items-start leading-10 ${
                  edit ? "" : "pr-16"
                }`}
              >
                <div className="flex-1 inline-flex items-start">
                  <img
                    className="mr-5 -mt-0.5"
                    src={"images/icon-lesson.png"}
                    alt="Lesson"
                  />
                  <div className="inline-flex flex-col">
                    <label className="text-sm uppercase tracking-wider font-semibold text-blue-400">
                      {data.type}
                    </label>
                    {data.title}
                  </div>
                </div>
                {edit ? (
                  <button className="btn inline-flex items-center px-4 mt-4">
                    <PencilIcon className="h-5 w-5 mr-2 text-[#4F47F3]" />
                    Edit info
                  </button>
                ) : null}
              </h2>
              <div className="lesson-standards flex ml-[4.25rem] mt-4 space-x-2">
                {data.standards.map((standard) => (
                  <div className="bg-white px-2 inline-flex items-center justify-center text-sm rounded-lg text-blue-700">
                    {standard.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className={`lesson-btns z-20 flex w-full items-start justify-end w-80 ${
              edit
                ? "fixed top-0 left-0 w-full z-30 bg-[#272465]/[0.925] shadow-lg px-4 py-3 justify-center items-center"
                : "mt-8 sticky top-1.5 pr-1.5"
            }`}
          >
            {edit ? (
              <div>
                <Dropdown
                  trigger={
                    <div className="px-4 btn h-12 inline-flex items-center">
                      Published
                      <ChevronDownIcon className="h-6 w-6 ml-2" />
                    </div>
                  }
                >
                  <Dropdown.Menu className="max-h-96 overflow-y-scroll min-w-full flex flex-col shadow-lg">
                    <Dropdown.Item className="text-[#272465] w-full p-2 whitespace-nowrap shrink-0 items-center hover:bg-[rgba(79,71,243,0.075)] inline-flex rounded-lg transition-colors">
                      Draft
                    </Dropdown.Item>
                    <Dropdown.Item className="text-[#272465] w-full p-2 whitespace-nowrap shrink-0 items-center hover:bg-[rgba(79,71,243,0.075)] inline-flex rounded-lg transition-colors">
                      <CheckIcon className="h-5 w-5 mr-2 text-green-500" />
                      Published
                    </Dropdown.Item>
                    <Dropdown.Item className="text-[#272465] w-full p-2 whitespace-nowrap shrink-0 items-center hover:bg-[rgba(79,71,243,0.075)] inline-flex rounded-lg transition-colors">
                      Archived
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            ) : null}
            {edit ? (
              <div className="inline-flex flex-1 items-center justify-end">
                <button
                  className="btn inline-flex items-center btn-green h-12 px-6"
                  onClick={() => setEdit(false)}
                >
                  <CheckIcon className="h-6 w-6 mr-2" />
                  Done editing
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <button className="inline-flex items-center btn btn-white h-11 px-3">
                  <HeartIcon className="h-6 w-6" />
                </button>
                <Dropdown
                  fluid
                  selection
                  className="inline-flex"
                  trigger={
                    <button className="inline-flex items-center btn btn-white h-11 px-4">
                      Actions
                      <ChevronDownIcon className="h-5 w-5 ml-2" />
                    </button>
                  }
                >
                  <Dropdown.Menu className="shadow-lg">
                    <Dropdown.Item className="flex items-center hover:bg-[rgba(79,71,243,0.075)] px-2 py-2 rounded-lg cursor-pointer transition-colors">
                      <ColorSwatchIcon className="h-6 w-6 text-[#4F47F3]" />
                      <span className="ml-4">Customize</span>
                    </Dropdown.Item>
                    <Dropdown.Item
                      className="flex items-center hover:bg-[rgba(79,71,243,0.075)] px-2 py-2 rounded-lg cursor-pointer transition-colors"
                      onClick={() => {
                        setEdit(true);
                        setTimeout(() => window.scrollTo(0, 0));
                      }}
                    >
                      <PencilAltIcon className="h-6 w-6 text-[#4F47F3]" />
                      <span className="ml-4">Edit</span>
                    </Dropdown.Item>
                    <Dropdown.Item className="flex items-center hover:bg-[rgba(79,71,243,0.075)] px-2 py-2 rounded-lg cursor-pointer transition-colors">
                      <SwitchHorizontalIcon className="h-6 w-6 text-[#4F47F3]" />
                      <span className="ml-4">Merge</span>
                    </Dropdown.Item>
                    <Dropdown.Item className="flex items-center hover:bg-[rgba(79,71,243,0.075)] px-2 py-2 rounded-lg cursor-pointer transition-colors">
                      <DuplicateIcon className="h-6 w-6 text-[#4F47F3]" />
                      <span className="ml-4">Copy lesson</span>
                    </Dropdown.Item>
                    <Dropdown.Item className="flex items-center hover:bg-[rgba(79,71,243,0.075)] px-2 py-2 rounded-lg cursor-pointer transition-colors">
                      <ShareIcon className="h-6 w-6 text-[#4F47F3]" />
                      <span className="ml-4">Share</span>
                    </Dropdown.Item>
                    <Dropdown.Item className="flex items-center hover:bg-[rgba(79,71,243,0.075)] px-2 py-2 rounded-lg cursor-pointer transition-colors">
                      <PrinterIcon className="h-6 w-6 text-[#4F47F3]" />
                      <span className="ml-4">Print</span>
                    </Dropdown.Item>
                    <Dropdown.Item className="flex items-center hover:bg-[rgba(79,71,243,0.075)] px-2 py-2 rounded-lg cursor-pointer transition-colors">
                      <CodeIcon className="h-6 w-6 text-[#4F47F3]" />
                      <span className="ml-4">Embed</span>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown
                  fluid
                  selection
                  className="inline-flex"
                  trigger={
                    <button className="btn btn-green h-11 px-4 inline-flex items-center">
                      Assign
                      <ChevronDownIcon className="h-5 w-5 ml-2" />
                    </button>
                  }
                >
                  <Dropdown.Menu className="shadow-lg">
                    <Dropdown.Item className="flex items-center hover:bg-[rgba(79,71,243,0.075)] px-2 py-2 rounded-lg cursor-pointer transition-colors">
                      <PlusIcon className="h-6 w-6 text-[#4F47F3]" />
                      <span className="ml-4">Assign now or schedule</span>
                    </Dropdown.Item>
                    <Dropdown.Item className="flex items-center hover:bg-[rgba(79,71,243,0.075)] px-2 py-2 rounded-lg cursor-pointer transition-colors">
                      <StatusOnlineIcon className="h-6 w-6 text-[#4F47F3]" />
                      <span className="ml-4">Start a Live Learn</span>
                    </Dropdown.Item>
                    <Dropdown.Item className="flex items-center hover:bg-[rgba(79,71,243,0.075)] px-2 py-2 rounded-lg cursor-pointer transition-colors">
                      <EyeIcon className="h-6 w-6 text-[#4F47F3]" />
                      <span className="ml-4">Preview the assignment</span>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            )}
          </div>
          <div className="lesson-tabs flex w-full mt-8 mb-5 border-b-2 border-[#BAC9FF] border-solid">
            <ul className="inline-flex">
              <li
                className={`cursor-pointer py-3 transition-all px-6 text-md border-b-[6px] -mb-[1px] font-bold ${
                  tab === "plan"
                    ? "text-[#5200FF] border-b-[#5200FF]"
                    : "text-[#272465] hover:text-[#5200FF] border-transparent"
                }`}
                onClick={() => setTab("plan")}
              >
                Lesson plan
              </li>
              <li
                className={`cursor-pointer py-3 transition-all px-6 text-md border-b-[6px] -mb-[1px] font-bold ${
                  tab === "materials"
                    ? "text-[#5200FF] border-b-[#5200FF]"
                    : "text-[#272465] hover:text-[#5200FF] border-transparent"
                }`}
                onClick={() => setTab("materials")}
              >
                Materials
              </li>
              <li
                className={`cursor-pointer py-3 transition-all px-6 text-md border-b-[6px] -mb-[1px] font-bold ${
                  tab === "about"
                    ? "text-[#5200FF] border-b-[#5200FF]"
                    : "text-[#272465] hover:text-[#5200FF] border-transparent"
                }`}
                onClick={() => setTab("about")}
              >
                About this lesson
              </li>
              {/* <li
                className={`cursor-pointer py-3 transition-all px-6 text-md border-b-[6px] -mb-[1px] font-bold ${
                  tab === "included"
                    ? "text-[#5200FF] border-b-[#5200FF]"
                    : "text-[#272465] hover:text-[#5200FF] border-transparent"
                }`}
                onClick={() => setTab("included")}
              >
                Included in
              </li> */}
            </ul>
          </div>
          {tab === "plan" ? (
            <LessonPlayer
              data={data}
              setData={setData}
              edit={edit}
              setCoverOn={setCoverOn}
              setContentOn={setContentOn}
            />
          ) : tab === "materials" ? (
            <LessonMaterials edit={edit} />
          ) : tab === "about" ? (
            <LessonAbout data={data} edit={edit} />
          ) : (
            <LessonIncluded edit={edit} />
          )}
        </div>
      ) : null}
      <div
        id="back-to-top"
        className="bg-white group p-4 text-center cursor-pointer h-16 w-16 rounded-full fixed bottom-4 right-5 z-50 shadow-xl text-[#4F47F3] hover:bg-[#4F47F3] hover:text-white transition-colors"
        onClick={() => window.scrollTo(0, 0)}
      >
        <p className="text-sm top-0 opacity-0 group-hover:opacity-100 group-hover:-top-6 transition-all absolute left-0 font-bold w-full text-center text-[#4F47F3]">
          to top
        </p>
        <ArrowUpIcon />
      </div>
      <Dropdown
        className="feedback bottom-2 right-2 z-10"
        trigger={
          <div className="flex flex-col items-center bg-white rounded-3xl px-4 py-2 shadow-xl text-[#4F47F3] cursor-pointer hover:bg-[#4F47F3] hover:text-white transition-colors">
            <ChatAlt2Icon className="h-9 w-9 mb-0.5" />
            <p className="text-xs">Feedback</p>
          </div>
        }
      >
        <Dropdown.Menu
          className="feedback-form shadow-2xl"
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
          }}
        >
          <form className="py-4 px-6">
            <div className="">
              <label>Your name</label>
              <input autoFocus type="text" placeholder="" />
            </div>
            <div className="mt-4">
              <label>Your email</label>
              <input type="text" placeholder="" />
            </div>
            <div className="mt-4">
              <label>Message</label>
              <textarea rows="4" />
            </div>
            <div className="mt-4 flex flex-col">
              <label>File attachments</label>
              <button className="btn py-2 px-4">Choose files</button>
            </div>
            <div className="mt-8 pb-2 flex justify-end">
              <button className="btn btn-green btn-md py-2 px-4">
                Send feedback
              </button>
            </div>
          </form>
        </Dropdown.Menu>
      </Dropdown>

      <div
        className={`fixed flex items-center justify-center top-0 left-0 h-screen w-screen z-20 ${
          coverOn ? "show" : "hide"
        }`}
        id="reveal-cols"
      >
        <div
          className={`reveal-col col-1 bg-[#03003e] absolute h-full w-[20%] left-0 ${
            coverOn ? "slideUp" : "hide"
          }`}
        />
        <div
          className={`reveal-col col-2 bg-[#03003e] absolute h-full w-[20%] left-[20%] ${
            coverOn ? "slideUp" : "hide"
          }`}
        />
        <div
          className={`reveal-col col-3 bg-[#03003e] absolute h-full w-[20%] left-[40%] ${
            coverOn ? "slideUp" : "hide"
          }`}
        />
        <div
          className={`reveal-col col-4 bg-[#03003e] absolute h-full w-[20%] left-[60%] ${
            coverOn ? "slideUp" : "hide"
          }`}
        />
        <div
          className={`reveal-col col-5 bg-[#03003e] absolute h-full w-[20%] left-[80%] ${
            coverOn ? "slideUp" : "hide"
          }`}
        />
        <div
          className={`absolute top-0 left-0 h-full w-full delay z-0 opacity-0 bg-cover bg-center bg-[url('${
            data.cover
          }')] ${coverOn ? "showHalf" : ""}`}
        />
        <div className="bg-white/[0.925] max-w-4xl z-10 py-12 px-12 rounded-2xl flex flex-col items-center justify-center shadow-2xl">
          {/* <h1 className="text-5xl leading-tight">{data.title}</h1> */}
          <h1 className="text-5xl leading-tight">{"Welcome"}</h1>
          <button
            className="btn btn-lg btn-green py-4 px-12 mt-12"
            onClick={() => setCoverOn(false)}
          >
            Enter App
          </button>
        </div>
      </div>
    </div>
  );
}
