"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const hotel_info_1 = require("./seed/hotel_info");
const prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        for (var i = 0; i < 1; i++) {
            const alice = yield prisma.user.upsert({
                where: { email: `alice${i}@prisma.io` },
                update: {},
                create: {
                    email: `alice${i}@prisma.io`,
                    name: 'Alice',
                    posts: {
                        create: {
                            title: 'Check out Prisma with Next.js',
                            content: 'https://www.prisma.io/nextjs',
                            published: true,
                        },
                    },
                },
            });
            console.dir(alice);
        }
    });
}
Promise.all([
    main(),
    // helloworld(),
    (0, hotel_info_1.hotel_info)(),
]).then(values => {
    console.log('done');
});
