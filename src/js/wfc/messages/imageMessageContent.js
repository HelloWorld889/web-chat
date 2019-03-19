import MediaMessageContent from './mediaMessageContent'
import MessageContentMediaType from './messageContentMediaType';
import MessageContentType from './messageContentType';
export default class ImageMessageContent extends MediaMessageContent {
    // base64 encoded
    thumbnail;

    constructor(file) {
        super(MessageContentType.Image, file);
        if (file) {
            // TODO thumbnail from image file
            // this.thumbnail = thumbnail;
        }
    }

    digest() {
        return '[图片]';
    }

    encode() {
        let payload = super.encode();
        payload.mediaType = MessageContentMediaType.Image;
        payload.binaryContent = this.thumbnail;
        return payload;
    };

    decode(payload) {
        super.decode(payload);
        this.thumbnail = payload.binaryContent;
    }

}