import { rest } from "msw";
import Graffiti from "../redux/features/graffitiSlice/types";
import { UserData, UserRegisterData } from "../types/types";
import mockGraffiti from "./mocksGraffitis/mockGraffiti";
import mockGraffitiList from "./mocksGraffitis/mockGraffitiList";

const url = process.env.REACT_APP_URLAPI;
const { _id } = mockGraffiti[0];

const handlers = [
  rest.post(`${url}/users/register`, async (req, res, ctx) => {
    const user = await req.json<UserRegisterData>();
    const { username } = user;

    if (username === "PacoIsAlive") {
      return res(
        ctx.status(409),
        ctx.json({ error: "Sorry, user already in the database" })
      );
    }

    return res(ctx.status(201), ctx.json({ user }));
  }),

  rest.post(`${url}/users/login`, async (req, res, ctx) => {
    const { password } = await req.json<UserData>();

    if (password === "2233") {
      return res(
        ctx.status(401),
        ctx.json({ error: "Sorry, wrong credentials" })
      );
    }
    return res(ctx.status(200), ctx.json({ token: "PacoToken" }));
  }),

  rest.get(`${url}/graffitis/list`, async (req, res, ctx) => {
    return await res.once(
      ctx.status(404),
      ctx.json({ error: "Sorry, this wall hasn't graffitis!" })
    );
  }),

  rest.get(`${url}/graffitis/list`, async (req, res, ctx) => {
    return await res.once(ctx.status(200), ctx.json(mockGraffitiList));
  }),

  rest.delete(`${url}/graffitis/delete/${_id}`, async (req, res, ctx) => {
    return await res.once(ctx.status(200));
  }),

  rest.delete(`${url}/graffitis/delete/${_id}`, async (req, res, ctx) => {
    return await res.once(
      ctx.status(500),
      ctx.json({ error: "Sorry, in this moment you can't delete!" })
    );
  }),

  rest.post(`${url}/graffitis/create`, async (req, res, ctx) => {
    const graffiti = req.json<Graffiti>();
    return await res.once(ctx.status(201), ctx.json({ graffiti }));
  }),

  rest.post(`${url}/graffitis/create`, async (req, res, ctx) => {
    return await res.once(
      ctx.status(500),
      ctx.json({ error: "Sorry, impossible create a graffiti now" })
    );
  }),

  rest.get(`${url}/graffitis/detail/${_id}`, async (req, res, ctx) => {
    return await res.once(
      ctx.status(200),
      ctx.json({ graffiti: mockGraffiti[0] })
    );
  }),

  rest.get(`${url}/graffitis/detail/${_id}`, async (req, res, ctx) => {
    return await res.once(
      ctx.status(500),
      ctx.json({ error: "Sorry, impossible show the graffiti now" })
    );
  }),
];

export default handlers;
