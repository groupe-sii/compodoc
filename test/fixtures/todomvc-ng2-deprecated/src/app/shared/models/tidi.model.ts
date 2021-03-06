import { Direction } from '../miscellaneous/miscellaneous';

import { LogMethod, LogProperty, LogPropertyWithArgs, LogClass } from '../decorators/log.decorator';

/**
 * The tidi class
 *
 * @deprecated This class is deprecated
 */
@LogClass
export class Tidi {
    /**
     * @deprecated This property is deprecated
     */
    completed: boolean;

    afunc(a: string, b: string): { passwordMismatch: boolean } | null {
        return true ? { passwordMismatch: true } : null;
    }

    /**
     * @param {string} value
     */
    public get emailAddress(): string {
        return 'email';
    }
}
