# Event Bus

```
interface IEventBus {
    channels: any,
    subscribe: (arg1: string, listener: (...args: any[]) => void) => void,
    publish: (arg1: string, arg2: any) => void
}


const EventBus: IEventBus = {
    channels: {},
    subscribe (channelName: string, listener: (...args: any[]) => void) {
        if (!this.channels[channelName]) {
        this.channels[channelName] = []
        }
        this.channels[channelName].push(listener);
    },
    publish (channelName: string, data: any) {
        const channel = this.channels[channelName];
        if (!channel || !channel.length) {
            return
        }
        channel.forEach((listener: (...args: any[]) => void) => listener(data))
    }

}
```

* [Go back](../readme.md)