import { Module } from "@nestjs/common";
import { TrackController } from "./track.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Track, TrackSchema } from "./schemas/track.schema";
import { CommentSchema,Comment } from "./schemas/comment.schema";
import { TrackService } from "./track.service";
import { FileService } from "src/file/file.service";


@Module({
    imports: [
        MongooseModule.forFeature([{name: Track.name, schema: TrackSchema}]),
        MongooseModule.forFeature([{name: Comment.name, schema: CommentSchema}]),
    ],
    controllers: [TrackController],
    providers: [TrackService, FileService]

})

export class TrackModule {
  

}