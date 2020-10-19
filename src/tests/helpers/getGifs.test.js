import { getGifs } from "../../helpers/getGifs";

describe("Pruebas con getGifs Fetch", () => {
  test("debe de traer 10 elementos", async () => {
    const gifts = await getGifs("One Punch");
    expect(gifts.length).toBe(10);
  });
  test("no debe de traer elementos", async () => {
    const gifts = await getGifs("");
    expect(gifts.length).toBe(0);
  });
});
