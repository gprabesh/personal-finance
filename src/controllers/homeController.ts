import { Request, Response } from "express";

export const homeRoute = async (req: Request, res: Response) => {
  try {
    const response = {
      message: "Hello",
    };
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
