import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("Prubeas en <GifGridItem/>", () => {
  const title = "Un titulo";

  const url = "https://localhost/algo.jpg";

  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("debe de mostrar el componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de tener un parrafo con el titulo", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(title);
  });

  test("debe de tener la imagen igual al url y alt de los props", () => {
    const img = wrapper.find("img");
    //con props evaluamos las propiedades del html y el src le decimos que queremos la propiedad src
    // console.log(img.prop('src'));
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });

  test("debe de tener anime_fadeIn", () => {
    //este test evalua solo una clase por medio del include
    const div = wrapper.find("div");
    const className = div.prop("className");
    expect(className.includes("animate__fadeIn")).toBe(true);
  });
});
