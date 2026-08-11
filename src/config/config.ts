import dotEnv from 'dotenv' ;

dotEnv.config() ;

export const secretOrKey = "secretkeyappearshere" ;

export const DB_HOST = "http://" + ( process.env.DB_HOST || "localhost" ) ;
export const DB_PORT = process.env.DB_PORT || 5432 ;
export const DB_USER = process.env.DB_USER || "root" ;
export const DB_PASSWORD = process.env.DB_PASSWORD || "" ;
export const DB_NAME = process.env.DB_NAME || "postgres" ;