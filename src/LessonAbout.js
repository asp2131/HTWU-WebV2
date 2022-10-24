import React from "react";
import { PencilIcon } from "@heroicons/react/outline";

export const LessonAbout = (props) => {
  const { data, edit } = props;
  return (
    <div className="lesson-about">
      <div class="text-lg flex px-8">
        <style>
          {`
            .lesson-about p {
              margin: 1.5em 0;
            }
            .lesson-about ul {
              margin: 1em;
            }
            .lesson-about li {
              list-style: disc;
              padding: 0 0.5em;
              margin: 0 1em;
            }
            `}
        </style>
        <div className="mr-2 w-72 mt-4 sticky max-h-0 top-2">
          <img
            src={
              data.curriculum === "IM"
                ? "images/about-noStd.png"
                : "images/about2-noStd.png"
            }
            className="w-full h-auto"
            alt="about"
          />
          {edit ? (
            <button className="btn inline-flex items-center px-4 h-10 mt-6">
              <PencilIcon className="h-5 w-5 mr-2 text-[#4F47F3]" />
              Edit
            </button>
          ) : null}
        </div>
        <div
          className={`max-w-4xl flex-1 mx-auto mt-6 rounded-lg bg-[#f4f6fe] py-2 px-10 ${
            edit ? "border border-1 border-blue-400" : ""
          }`}
        >
          {/* <div
            className="h-72 bg-center bg-cover -mt-2 -mx-10 mb-12 rounded-t-xl"
            style={{ backgroundImage: `url(${data.cover})` }}
          /> */}
          <p>
            Students start the first lesson of the school year by recalling what
            they know about&nbsp;<b>area</b>&nbsp;(note that students studied
            the areas of rectangles with whole-number side lengths in grade 3
            and with fractional side lengths in grade 5). The mathematics they
            explore is not complicated, so it offers a low threshold for entry.
            The lesson does, however, uncover two important ideas:
          </p>

          <ul>
            <li>
              If two figures can be placed one on top of the other so that they
              match up exactly, then they have the same area.
            </li>
            <li>
              The area of a&nbsp;<b>region</b>&nbsp;does not change when the
              region is decomposed and rearranged.
            </li>
          </ul>

          <p>
            At the end of this lesson, students are asked to write their best
            definition&nbsp;of area. It is important to let them formulate their
            definition in their own words. For English learners, it is
            especially important that they be encouraged to use their own words
            and also to use words of their peers. In the next lesson, students
            will revisit the definition of area as the number of square
            units&nbsp;that cover a region without gaps or overlaps.
          </p>

          <p>
            As the first set of problems in a problem-based curriculum, students
            will also begin their year-long work on making sense of problems and
            persevering in solving them (MP1). This opening lesson leaves space
            for teachers to begin setting classroom routines and their
            expectations for mathematical discourse (MP3).
          </p>

          <p>
            In all of the lessons in this unit, students should have access to
            their geometry toolkits, which should contain tracing paper, graph
            paper, colored pencils, scissors, and an index card. Students may
            not need all (or even any) of these tools to solve a particular
            problem. However, to make strategic choices about when to use which
            tools (MP5), students need to have opportunities to make those
            choices. Apps and simulations should supplement rather than replace
            physical tools.
          </p>

          <p>
            <i>Notes on terminology.</i>&nbsp;In these materials, when we talk
            about a figure such as a rectangle, triangle, or circle, we usually
            mean the boundary of the figure (e.g., the sides of the rectangle),
            not including the region inside. However, we also use shorthand
            language such as “the area of a rectangle”&nbsp;to mean the “the
            area of the region inside the rectangle.”&nbsp;The term
            shape&nbsp;could refer to a figure with or without its interior.
            Although the terms figure, region, and shape are used without being
            defined precisely for students, help students understand that
            sometimes our focus is on the boundary (which in this unit will
            always be composed of black line segments), and sometimes it is on
            the region inside (which in this unit will always be shown in color
            and referred to as “the shaded region”).
          </p>

          <p>
            <b>Lesson overview</b>
          </p>

          <ul>
            <li>
              <b>1.1 Warm-up:</b>&nbsp;Which One Doesn’t Belong: Tilings
              (5&nbsp;minutes)
            </li>
            <li>
              <b>1.2 Activity:</b>&nbsp;More Red, Green, or Blue?
              (25&nbsp;minutes)
              <ul>
                <li>Includes "Are you Ready for More?" extension problem</li>
                <li>There is a digital applet in this activity.</li>
              </ul>
            </li>
            <li>
              <b>Lesson Synthesis</b>
            </li>
            <li>
              <b>1.3 Cool-down:</b>&nbsp;What is Area? (5&nbsp;minutes)
            </li>
          </ul>

          <p>
            <b>Learning goals:</b>
          </p>

          <ul>
            <li>
              Compare (orally) areas of the shapes that make up a geometric
              pattern.
            </li>
            <li>
              Comprehend that the word “area” (orally and in writing) refers to
              how much of the plane a shape covers.
            </li>
          </ul>

          <p>
            <b>Learning goals (student facing):</b>
          </p>

          <ul>
            <li>Let’s look at tiling patterns and think about area.</li>
          </ul>

          <p>
            <b>Learning targets (student facing):</b>
          </p>

          <ul>
            <li>I can explain the meaning of area.</li>
          </ul>

          <p>
            <b>Required materials:</b>
          </p>

          <ul>
            <li>geometry toolkits</li>
          </ul>

          <p>
            <b>Required preparation:</b>
          </p>

          <ul>
            <li>Assemble geometry toolkits.</li>
            <li>
              It would be best if students have&nbsp;access to these toolkits at
              all times throughout the unit.
            </li>
            <li>
              Toolkits include tracing paper, graph paper, colored pencils,
              scissors, and an index card to use as a straightedge or to mark
              right angles.
            </li>
          </ul>

          <p>
            <b>Glossary:</b>
          </p>

          <ul>
            <li>
              <b>area&nbsp;</b>- Area is the number of square units that
              cover&nbsp;a two-dimensional region, without any gaps or overlaps.
              For example, the area of region A is 8 square units. The area of
              the shaded region of B is&nbsp; &nbsp;square unit.
            </li>
          </ul>

          <p style={{ textAlign: "center" }}>
            <img
              alt=""
              src="https://cdn.fs.learnzillioncdn.com/wiJ2JOtlTMeHNprfb9Uf?dl=true&amp;policy=eyJjYWxsIjoicmVhZCxjb252ZXJ0IiwiaGFuZGxlIjoid2lKMkpPdGxUTWVITnByZmI5VWYiLCJleHBpcnkiOjE4MzAyOTc2MDB9&amp;signature=4558ebca1d43a839899fe296d0cf01c0a843afc99bf26d4a69894284ded09d8e"
              height="151"
              width="300"
            />
          </p>

          <ul>
            <li>
              <b>region</b>
              <b>&nbsp;</b>- A region is the space inside of a shape. Some
              examples of two-dimensional regions are inside a circle or inside
              a polygon. Some examples of three-dimensional regions are the
              inside of a cube or the inside of a sphere.
            </li>
            <li>Access the&nbsp;complete Grade 6&nbsp;glossary.</li>
          </ul>

          <p>
            <b>Standards</b>
          </p>

          <ul>
            <li>
              This lesson <b>builds on</b> the standard:
              <span class="lz-standards">
                <span
                  class="has-tip initiative-1 lz-standard"
                  title="Reason with shapes and their attributes."
                >
                  CCSS.3.G.A
                </span>
                <span
                  class="has-tip initiative-9 lz-standard"
                  title="Reason with shapes and their attributes."
                >
                  MO.3.GM.A
                </span>
              </span>
            </li>
            <li>
              This lesson<b> builds towards</b> the standards:
              <span class="lz-standards">
                <span
                  class="has-tip initiative-1 lz-standard"
                  title="Find the area of right triangles, other triangles, special quadrilaterals, and polygons by composing into rectangles or decomposing into triangles and other shapes; apply these techniques in the context of solving real-world and mathematical problems."
                >
                  CCSS.6.G.A.1
                </span>
                <span
                  class="has-tip initiative-7 lz-standard"
                  title="Find the area of right triangles, other triangles, special quadrilaterals, and polygons by composing into rectangles or decomposing into triangles and other shapes; apply these techniques in the context of solving real-world and mathematical problems."
                >
                  MS.6.G.1
                </span>
                <span
                  class="has-tip initiative-9 lz-standard"
                  title="Find the area of polygons by composing or decomposing the shapes into rectangles or triangles."
                >
                  MO.6.GM.A.1
                </span>
              </span>
            </li>
          </ul>

          <p className="pt-24 text-sm">
            IM 6–8 Math was originally developed by Open Up Resources and
            authored by Illustrative Mathematics, and is copyright 2017-2019 by
            Open Up Resources. It is licensed under the{" "}
            <a href="https://creativecommons.org/licenses/by/4.0/">
              Creative Commons Attribution 4.0 International License (CC BY 4.0)
            </a>
            . OUR's 6–8 Math Curriculum is available at{" "}
            <a href="https://openupresources.org/math-curriculum/">
              https://openupresources.org/math-curriculum/
            </a>
            .
          </p>

          <p className="text-sm">
            Adaptations and updates to IM 6–8 Math are copyright 2019 by{" "}
            <a href="https://www.illustrativemathematics.org/">
              Illustrative Mathematics
            </a>
            , and are licensed under the{" "}
            <a href="https://creativecommons.org/licenses/by/4.0/">
              Creative Commons Attribution 4.0 International License (CC BY 4.0)
            </a>
            .
          </p>

          <p className="text-sm">
            Adaptations to add additional English language learner supports are
            copyright 2019 by{" "}
            <a href="https://openupresources.org/">Open Up Resources</a>, and
            are licensed under the{" "}
            <a href="https://creativecommons.org/licenses/by/4.0/">
              Creative Commons Attribution 4.0 International License (CC BY 4.0)
            </a>
            .
          </p>

          <p className="text-sm">
            The Illustrative Mathematics name and logo are not subject to the
            Creative Commons license and may not be used without the prior and
            express written consent of Illustrative Mathematics.
          </p>

          <p className="text-sm">
            This site includes public domain images or openly licensed images
            that are copyrighted by their respective owners. Openly licensed
            images remain under the terms of their respective licenses.
          </p>
        </div>
      </div>
    </div>
  );
};
