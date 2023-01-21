import { Router } from 'express';
import { HealhtChecker } from './health-check-routers';
import { boilerplate } from './boilerplate';


const v1 = Router();
v1.use(HealhtChecker);
v1.use(boilerplate)
export { v1 };
