/**
 * Footer component that displays the copyright information.
 * @returns {JSX.Element} The JSX element for the Footer component.
 */
export default function Footer() {
  return (
    <div
      data-cursor-exclusion
      className="relative w-full py-3 px-10 flex flex-row justify-center items-center text-[0.7em] md:text-sm"
    >
      <p className="border border-main bg-opacity-5 bg-secondary p-2 rounded-lg">
        Copyright © 2022 - Soumik Das. All Rights Reserved
      </p>
    </div>
  );
}
