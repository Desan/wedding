import { prop, Typegoose } from 'typegoose'

export class Guest extends Typegoose {
    /**
     * Имя гостя
     */
    @prop({required: true})
    name?: string

    /**
     * Имя гостя
     */
    @prop({required: true})
    fullName?: string
  
    /**
     * Приял ли приглание
     */
    @prop()
    isAccept?: boolean

    /**
     * Будет ли произность речь
     */
    @prop()
    hasSpeech?: boolean

    /**
     * Хочет ли поехать на церемонию
     */
    @prop()
    whantsCeremony?: boolean
    
    /**
     * Выпить
     */
    @prop({ enum: Guest.Alcohol })
    alcohol?: Guest.Alcohol

    /**
     * Покушать
     */
    @prop({ enum: Guest.Food })
    food?: Guest.Food

}

const GuestModel = new Guest().getModelForClass(Guest)

export namespace Guest {
    export enum Alcohol {
        WEAK = 'weak',
        STRONG = 'strong',
        ALL = 'all',
        NONE = 'none'
    }
    export enum Food {
        FISH = 'fish',
        BEEF = 'beef',
        BURGER = 'burger',
        PLANTS = 'plants'
    }
    export const Model = GuestModel
}
