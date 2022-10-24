import React, { useState, useEffect, useRef } from "react";
import useKeypress from "react-use-keypress";
import _ from "lodash";
import {
  MenuAlt2Icon,
  DocumentTextIcon,
  ArrowsExpandIcon,
  XIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  TrashIcon,
  PlusIcon,
  PresentationChartLineIcon,
  DotsVerticalIcon,
  DuplicateIcon,
  CalculatorIcon,
  LightningBoltIcon,
  ChevronUpIcon,
  ChevronDownIcon
  // QuestionMarkCircleIcon
} from "@heroicons/react/outline";
import { Dropdown } from "semantic-ui-react";

export const LessonPlayer = (props) => {
  const { data, setData, edit, setCoverOn, setContentOn } = props;
  const [fullScreen, setFullScreen] = useState(false);
  const [tools, setTools] = useState(false);
  const [notes, setNotes] = useState(false);
  const [thumbs, setThumbs] = useState(false);
  const [toolbar, setToolbar] = useState(true);
  const [currCard, setCurrCard] = useState(0);
  const timeout = useRef(null);
  const scrolling = useRef(false);
  const iframeRef = useRef();
  const editNotes = useRef();
  const editThumbs = useRef();
  const [iframeHeight, setIframeHeight] = useState("480px");

  useEffect(() => {
    if (edit) {
      editNotes.current = notes;
      editThumbs.current = thumbs;
      setNotes(true);
      setThumbs(true);
    } else {
      setNotes(editNotes.current);
      setThumbs(editThumbs.current);
      setFullScreen(false);
    }
    initPlayer();
  }, [edit]);

  const iframeResize = () => {
    setIframeHeight(
      iframeRef.current.contentWindow.document.body.scrollWidth * (9 / 16)
    );
  };

  useEffect(() => {
    if (!edit) {
      clearTimeout(timeout.current);
      timeout.current = setTimeout(() => scrollToCard(currCard), 100);
    }
  }, [fullScreen, notes, thumbs]);

  const scrollToCard = (index, smooth) => {
    scrolling.current = true;
    const card = document.getElementById(`card-${index}`);
    window.scrollTo({
      top: card.getBoundingClientRect().top + window.pageYOffset + 18,
      behavior: smooth ? "smooth" : "auto"
    });
    clearTimeout(timeout.current);
    timeout.current = setTimeout(
      () => (scrolling.current = false),
      smooth ? 750 : 0
    );
  };

  const changeCard = (index) => {
    setCurrCard(index);
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => scrollToCard(index, true));
  };

  const changePrev = () => {
    if (currCard > 0) changeCard(currCard - 1);
  };

  const changeNext = () => {
    if (currCard < data.cards.length - 1) changeCard(currCard + 1);
  };

  useKeypress(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"], (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      changePrev();
    } else {
      changeNext();
    }
  });

  const initPlayer = () => {
    const sections = [...document.getElementsByClassName("lesson-card")];
    document.addEventListener(
      "scroll",
      _.throttle((e) => {
        sections.forEach((section) => {
          if (
            !scrolling.current &&
            section.offsetTop <= window.scrollY &&
            window.scrollY < section.offsetHeight + section.offsetTop
          ) {
            setCurrCard(Number(section.id.replace("card-", "")));
            section.classList.add("active");
          } else {
            section.classList.remove("active");
          }
        });
      }, 10)
    );
    setTimeout(() => window.scrollTo(0, 0), 101);
  };

  const addCard = () => {
    const dataCopy = { ...data };
    dataCopy.cards[dataCopy.cards.length] = {
      id: dataCopy.cards.length + 1,
      title: "",
      progress: 0,
      avg: 0,
      content: "images/contentTypes.png",
      notes: "",
      split: {
        active: false,
        rangeState: null,
        rangeEnd: null
      }
    };
    setData(dataCopy);
    changeCard(dataCopy.cards.length - 1);
  };

  const updateCard = (index, type, event) => {
    const dataCopy = { ...data };
    dataCopy.cards[index][type] = event.target.value;
    setData(dataCopy);
  };

  return (
    <div
      className={`lesson-player flex flex-col w-full ${
        fullScreen ? "absolute top-0 left-0 h-full w-full px-6" : "mt-5"
      }`}
    >
      {fullScreen ? (
        <div className="lesson-player-bg bg-[#110ba5]/[0.875] fixed z-40 top-0 left-0 h-full w-full" />
      ) : null}
      <style>
        {`
        body::-webkit-scrollbar {
          width: 24px;
        }
        body::-webkit-scrollbar-track {
          background: #ffffff;
        }
        body::-webkit-scrollbar-thumb {
          background: #4F47F3;
          border-radius: 1rem;
        }
        body::-webkit-scrollbar-thumb:hover {
          background: #4F47F3;
        }
        .lesson-card.active .lesson-card-title {
          box-shadow: 0 4px 6px -2px rgba(39,36,101,0.15);
          border-radius: 0;
          padding-top: 0.5em;
          padding-bottom: 0.5em;
          font-size: 1.25rem;
        }
        .lesson-card.active .lesson-card-title > div {
          white-space: nowrap;
        }
        .lesson-dots::-webkit-scrollbar {
          height: 8px;
        }
        .lesson-dots::-webkit-scrollbar-track {
          background: #0F0C4E;
          border-radius: 1rem;
        }
        .lesson-dots::-webkit-scrollbar-thumb {
          background: #4F47F3;
          border-radius: 1rem;
        }
        .lesson-dots::-webkit-scrollbar-thumb:hover {
          background: #4F47F3;
        }
      `}
      </style>
      <div
        className={`lesson-content min-h-96 w-full flex ${edit ? "pt-2" : ""} ${
          fullScreen ? "z-50" : ""
        }`}
      >
        <div
          className={`lesson-thumbs shrink-0 sticky pt-5 z-0 transition-all w-44 ${
            thumbs ? "opacity-1" : "opacity-0"
          } ${
            edit
              ? "top-20 max-h-[calc(100vh-12rem)]"
              : "top-2 max-h-[calc(100vh-4rem)]"
          }`}
        >
          {edit ? (
            <div className="lesson-edit-toolbar sticky top-5 flex z-20 flex-1 pr-4 mb-10">
              <button
                className="btn btn-green h-10 px-4 py-8 rounded-lg shadow-md w-full flex text-lg justify-center items-center"
                onClick={addCard}
              >
                <PlusIcon className="h-5 w-5 mr-2" />
                <span>Add Card</span>
              </button>
            </div>
          ) : null}
          <ul
            className={`pr-6 absolute w-full pt-3 pl-1 -ml-1 -mt-3 overflow-y-auto ${
              edit
                ? "max-h-[calc(100vh-12rem)] pb-24"
                : "max-h-[calc(100vh-4rem)] pb-6"
            }`}
          >
            {data.cards.map((card, index) => (
              <li
                className={`my-8 cursor-pointer first:mt-0 w-full flex flex-col justify-center items-center rounded-lg shadow-md transition duration-200 relative ${
                  currCard === index
                    ? "bg-[#4F47F3] border-4 border-[#4F47F3] ring-2 ring-offset-2 ring-[#4F47F3]"
                    : edit
                    ? "bg-[#f4f6fe] cursor-move"
                    : "btn bg-[#f4f6fe] hover:shadow-xl"
                }`}
                key={index}
                alt={card.title}
                onClick={() => changeCard(index)}
              >
                <div className="px-2 py-6 text-xs w-full">
                  <div
                    className={`w-full text-ellipsis whitespace-nowrap overflow-hidden text-center ${
                      currCard === index ? "text-white" : ""
                    }`}
                  >
                    {index + 1}. {card.title}
                  </div>
                </div>
                {/* <div
                  className="w-full h-20 bg-cover bg-top rounded-b-lg"
                  style={{ backgroundImage: `url('${card.content}')` }}
                /> */}
                {edit ? (
                  <div
                    className={`absolute ${
                      currCard === index ? "-top-4 -right-5" : "-top-3 -right-4"
                    }`}
                  >
                    <Dropdown
                      trigger={
                        <div
                          className={`h-8 w-8 bg-white shadow-md rounded-full p-1.5 cursor-pointer`}
                        >
                          <DotsVerticalIcon className="h-5 w-5 text-[#4F47F3]" />
                        </div>
                      }
                    >
                      <Dropdown.Menu className="shadow-md">
                        <Dropdown.Item className="flex items-center p-2 cursor-pointer hover:bg-[rgba(79,71,243,0.075)] rounded-lg">
                          <DuplicateIcon
                            className={`h-5 w-5 mr-2 text-[#4F47F3]`}
                          />
                          Duplicate
                        </Dropdown.Item>
                        <Dropdown.Item className="flex items-center p-2 cursor-pointer text-red-500 hover:text-white hover:bg-red-500 rounded-lg">
                          <TrashIcon className={`h-5 w-5 mr-2`} />
                          Delete
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
        <div
          className={`lesson-cards mb-12 z-10 flex transition-all w-full ${
            !thumbs && notes
              ? "-ml-44 mr-80"
              : !thumbs && !notes
              ? "-ml-44"
              : thumbs && notes
              ? "mr-80"
              : ""
          }`}
        >
          <ul
            id="cards"
            className={`flex-1 flex flex-col h-full w-full ${
              fullScreen ? "min-h-[calc(100vh-9em)]" : ""
            }`}
          >
            {data.cards.map((card, index) => (
              <li
                id={`card-${index}`}
                className={`lesson-card my-10 first:mt-0 last:my-0 w-full pt-4 ${
                  notes ? "rounded-l-2xl" : "rounded-2xl"
                }`}
                key={index}
              >
                <div className="w-full relative">
                  <div
                    className={`lesson-notes shadow-lg w-80 bg-[#F5F8FF] absolute right-0 top-0 h-full overflow-auto py-6 px-8 transition-all rounded-r-2xl z-0 ${
                      notes ? "-mr-80 opacity-1" : "mr-80 opacity-0"
                    }`}
                  >
                    <h4 className="text-xl text-blue-900 text-center mb-6">
                      Teaching notes
                    </h4>
                    {edit ? (
                      <textarea
                        cols="5"
                        className="w-full h-[calc(100%-4em)]"
                        value={card.notes}
                        placeholder="Enter teaching notes..."
                        onChange={(event) => updateCard(index, "notes", event)}
                      />
                    ) : (
                      <div
                        className="text-md"
                        dangerouslySetInnerHTML={{ __html: card.notes }}
                      />
                    )}
                  </div>
                  <div
                    className={`relative z-10 shadow-lg bg-white ${
                      notes ? "rounded-l-2xl" : "rounded-2xl"
                    }`}
                  >
                    {edit ? (
                      <div className="flex">
                        <span className="bg-white top-5 left-5 h-10 w-10 inline-flex shrink-0 rounded-full items-center justify-center mr-4 text-[1.15rem] absolute z-10">
                          {index + 1}
                        </span>
                        <input
                          class="bg-[#f4f6fe]/[0.925] w-full sticky top-0 rounded-tl-2xl text-[1.33em] py-6 pl-20 pr-6 flex items-center"
                          type="text"
                          value={card.title}
                          placeholder="Enter card title..."
                          onChange={(event) =>
                            updateCard(index, "title", event)
                          }
                        />
                        {/* <button className="btn z-20 whitespace-nowrap px-4">
                          Edit card
                        </button> */}
                      </div>
                    ) : (
                      <h3
                        id={`card-title-${index}`}
                        className={`lesson-card-title transition-all bg-[#f4f6fe]/[0.925] inline-flex items-center sticky w-full top-0 text-[1.33em] pl-6 pr-80 py-5 border-t border-t-10 border-t-solid border-t-white ${
                          notes ? "rounded-tl-2xl" : "rounded-t-2xl "
                        }`}
                      >
                        <span className="bg-white h-10 w-10 inline-flex shrink-0 rounded-full items-center justify-center mr-4 text-[1.15rem]">
                          {index + 1}
                        </span>{" "}
                        <div className="w-full overflow-hidden text-ellipsis">
                          {card.title}
                        </div>
                      </h3>
                    )}
                    <img
                      className={`w-full h-auto ${
                        notes ? "rounded-bl-2xl" : "rounded-b-2xl "
                      }`}
                      src={card.content}
                      alt="Logo"
                    />
                    {edit ? (
                      <div className="flex my-6 items-center justify-center w-full">
                        <button className="btn px-4 h-10">
                          Change content
                        </button>
                      </div>
                    ) : null}
                    {/* <iframe
                      src="/digitalCenter/index.html"
                      ref={iframeRef}
                      onLoad={iframeResize}
                      id="centerFrame"
                      width="100%"
                      height={iframeHeight}
                      scrolling="no"
                      frameBorder="0"
                      title="Digital Center"
                      style={{
                        width: "100%",
                        overflow: "auto"
                      }}
                    /> */}
                    {edit ? (
                      <div className="flex items-center p-4 items-center bg-[#f4f6fe]/[0.925] rounded-bl-2xl">
                        <div className="flex items-center flex-1">
                          <input
                            id={`thumb-input-${index}`}
                            type="checkbox"
                            value={card.splitActive}
                            className="h-6 w-6 rounded-lg cursor-pointer"
                            onChange={(event) =>
                              updateCard(index, "splitActive", event)
                            }
                          />
                          <label
                            className="ml-2 cursor-pointer"
                            for={`thumb-input-${index}`}
                          >
                            Assignment card
                          </label>
                          {card.splitActive ? (
                            <div className="ml-12 flex items-center justify-center">
                              <div className="ml-4">
                                <label>Stick through card: </label>
                                <select name="cars" id="cars">
                                  <option value="volvo">1</option>
                                  <option value="saab">2</option>
                                  <option value="mercedes">3</option>
                                  <option value="audi">4</option>
                                  <option value="audi">5</option>
                                </select>
                              </div>
                            </div>
                          ) : null}
                        </div>
                        <div className="flex items-center">
                          <button className="btn btn-sm px-4 h-8">
                            Add voiceover
                          </button>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div
            className={`w-[42.5%] h-screen transition-all flex items-start sticky top-2 justify-center py-4 pl-4 ${
              tools ? "mr-0 opacity-1" : "-mr-[42.5%] opacity-0 hidden"
            }`}
          >
            <img
              src="images/calc.png"
              className="shadow-md rounded-lg border border-1 border-[#4F47F3]"
              alt="calculator"
            />
          </div>
        </div>
      </div>
      <div
        className={`lesson-toolbar group transition-all sticky flex shrink-0 items-stretch rounded-2xl bg-[#1E1A65]/[0.95] ${
          fullScreen ? "z-50" : "z-20"
        } ${toolbar ? "bottom-1" : "-bottom-[4.5rem]"}`}
      >
        <div
          id="hide-toolbar"
          className={`absolute cursor-pointer group-hover:bg-[#1E1A65]/[0.95] group group-hover:opacity-100 group-hover:h-8 group-hover:-top-8 transition-all -top-5 -z-10 m-auto left-0 right-0 w-20 h-5 flex items-center justify-center rounded-t-xl ${
            toolbar ? "bg-[#1E1A65]/[0.33]" : "bg-[#1E1A65]/[0.45]"
          }`}
          onClick={() => setToolbar(!toolbar)}
        >
          <ChevronDownIcon
            className={`h-6 w-6 text-white transition-all ${
              toolbar ? "transform-none" : "transform rotate-180"
            }`}
          />
        </div>
        <div
          className={`px-6 transition-colors flex flex-col items-center justify-center rounded-l-2xl cursor-pointer cursor-pointer hover:bg-[#342BEC] ${
            thumbs ? "bg-[#4F47F3]" : ""
          }`}
          onClick={() => setThumbs(!thumbs)}
        >
          <MenuAlt2Icon className="h-8 w-8 text-white" />
          <label className="text-white mt-1 text-[0.825rem] cursor-pointer">
            Sidebar
          </label>
        </div>
        <Dropdown
          upward
          className="centered dark"
          trigger={
            <div
              className={`px-6 transition-colors h-full w-full flex flex-col items-center justify-center cursor-pointer hover:bg-[#342BEC] ${
                tools ? "bg-[#4F47F3]" : ""
              }`}
            >
              <LightningBoltIcon className="h-8 w-8 text-white" />
              <label className="text-white mt-1 text-[0.825rem] cursor-pointer">
                Tools
              </label>
            </div>
          }
        >
          <Dropdown.Menu>
            <Dropdown.Item
              className="p-2 flex cursor-pointer text-white hover:text-blue-300 transition-colors"
              onClick={() => setTools(!tools)}
            >
              <CalculatorIcon className="h-5 w-5 mr-2" />
              Scientific Calculator
            </Dropdown.Item>
            <Dropdown.Item
              className="p-2 flex cursor-pointer text-white hover:text-blue-300 transition-colors"
              onClick={() => setTools(!tools)}
            >
              <CalculatorIcon className="h-5 w-5 mr-2" />
              Graphing Calculator
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div className="lesson-nav shadow-lg flex-1 flex justify-center items-center">
          <div
            className={`flex text-white transition-colors ${
              currCard === 0
                ? "opacity-25 pointer-events-none"
                : "opacity-100 cursor-pointer hover:text-[#827CFF]"
            }`}
            onClick={changePrev}
          >
            <ChevronLeftIcon className=" h-9 w-9 mr-4" />
          </div>
          <ul className="lesson-dots flex max-w-lg overflow-x-scroll px-2 pt-2 pb-1">
            {data.cards.map((card, index) => (
              <li
                className={`mt-2 mb-2 mx-2 h-10 w-10 shrink-0 cursor-pointer flex justify-center items-center border-2 border-white rounded-full transition-colors duration-200 ${
                  currCard === index
                    ? "bg-white text-[#272465] ring-[2px] ring-inset ring-[#272465]"
                    : "bg-[#272465] text-white hover:bg-[#4F47F3]"
                }`}
                key={index}
                onClick={() => changeCard(index)}
              >
                {index + 1}
              </li>
            ))}
          </ul>
          <div
            className={`flex text-white transition-colors ${
              currCard === data.cards.length - 1
                ? "opacity-25 pointer-events-none"
                : "opacity-100 cursor-pointer hover:text-[#827CFF]"
            }`}
            onClick={changeNext}
          >
            <ChevronRightIcon className="h-9 w-9 ml-4" />
          </div>
        </div>
        {!fullScreen ? (
          <div
            className={`px-6 transition-colors flex flex-col items-center justify-center cursor-pointer hover:bg-[#342BEC] ${
              notes ? "bg-[#4F47F3]" : ""
            }`}
            onClick={() => setNotes(!notes)}
          >
            <DocumentTextIcon className="h-8 w-8 text-white" />
            <label className="text-white mt-1 text-[0.825rem] cursor-pointer">
              Notes
            </label>
          </div>
        ) : null}
        {!edit && !fullScreen ? (
          <div
            className={`px-6 transition-colors flex flex-col items-center justify-center cursor-pointer hover:bg-[#342BEC]`}
          >
            <PresentationChartLineIcon className="h-8 w-8 text-white" />
            <label className="text-white mt-1 text-[0.825rem] cursor-pointer">
              Presenter
            </label>
          </div>
        ) : null}
        {!edit ? (
          <div
            className={`px-6 transition-colors flex flex-col items-center justify-center cursor-pointer hover:bg-[#342BEC] rounded-r-2xl ${
              fullScreen ? "bg-red-700 hover:bg-red-800" : ""
            }`}
            onClick={() => {
              if (!fullScreen) {
                var elem = document.documentElement;
                if (elem.requestFullscreen) {
                  elem.requestFullscreen();
                } else if (elem.webkitRequestFullscreen) {
                  elem.webkitRequestFullscreen();
                } else if (elem.msRequestFullscreen) {
                  elem.msRequestFullscreen();
                }
                setCoverOn(true);
                setContentOn(false);
                setTimeout(() => {
                  window.scrollTo(0, 0);
                  setContentOn(true);
                }, 1000);
              } else {
                if (document.exitFullscreen) {
                  document.exitFullscreen();
                } else if (document.webkitExitFullscreen) {
                  document.webkitExitFullscreen();
                } else if (document.msExitFullscreen) {
                  document.msExitFullscreen();
                }
              }
              setNotes(false);
              setFullScreen(!fullScreen);
            }}
          >
            {!fullScreen ? (
              <ArrowsExpandIcon className="h-8 w-8 text-white" />
            ) : (
              <XIcon className="h-8 w-8 text-white" />
            )}
            <label className="text-white mt-1 text-[0.825rem] cursor-pointer">
              Fullscreen
            </label>
          </div>
        ) : null}
      </div>
    </div>
  );
};
