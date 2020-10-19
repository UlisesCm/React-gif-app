import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs");

describe("Test del componente <GifGrid/>", () => {
  const category = "Cualquier Categoria";

  test("compara el Snapshot", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: false,
    });

    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar items cuando se cargan imagenes useGetchGifs", () => {
    const gifs = [
      {
        id: "ABD",
        url: "http://localhost/cualquiercosa.jps",
        title: "Cualquiercosa",
      },
      {
        id: "123",
        url: "http://localhost/cualquiercosa.jps",
        title: "Cualquiercosa",
      },
    ];
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });
    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
  });
});
