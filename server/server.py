import asyncio
import websockets

async def echo(websocket):
    async for message in websocket:
        await websocket.send(message + " from server")

async def main():
    async with websockets.serve(echo, "localhost", 8080):
        await asyncio.Future()  # run forever

asyncio.run(main())