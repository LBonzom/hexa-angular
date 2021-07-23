import { InjectionToken, Type } from "@angular/core";
import { LibASpiPort } from "port-lib-a";

export const TOKEN_ADAPTER_SPI_CLASS_LIB_A = new InjectionToken<Type<LibASpiPort> | undefined>("TOKEN_ADAPTER_SPI_CLASS_LIB_A");