"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Book_name, _Book_rating;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
class Book {
    constructor(name, rating) {
        _Book_name.set(this, "");
        _Book_rating.set(this, 0);
        __classPrivateFieldSet(this, _Book_name, name, "f");
        this.setRating = rating;
    }
    set setRating(rating) {
        if (rating < 1 || rating > 10) {
            throw new Error('Érvénytelen értékelés!');
        }
        __classPrivateFieldSet(this, _Book_rating, rating, "f");
    }
    toString() {
        return __classPrivateFieldGet(this, _Book_name, "f") + " " + __classPrivateFieldGet(this, _Book_rating, "f") + "/10";
    }
}
exports.Book = Book;
_Book_name = new WeakMap(), _Book_rating = new WeakMap();
