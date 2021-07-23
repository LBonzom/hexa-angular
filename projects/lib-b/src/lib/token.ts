import { InjectionToken, Type } from "@angular/core";
import { LibBSpiPort } from "port-lib-b";

export const TOKEN_ADAPTER_SPI_CLASS_LIB_B = new InjectionToken<Type<LibBSpiPort> | undefined>("TOKEN_ADAPTER_SPI_CLASS_LIB_B");