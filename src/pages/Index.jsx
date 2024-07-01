import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <header className="w-full max-w-4xl mx-auto text-center py-8">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to Horse World</h1>
        <p className="text-lg text-gray-600 mt-4">
          Discover the beauty and elegance of horses.
        </p>
      </header>
      <Separator className="my-8" />
      <main className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>About Horses</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Horses are majestic creatures known for their strength, grace, and beauty.
              They have been companions to humans for centuries, playing vital roles in
              transportation, agriculture, and sports.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Horse Breeds</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              There are over 300 different horse breeds in the world, each with unique
              characteristics and qualities. Some popular breeds include the Arabian,
              Thoroughbred, and Quarter Horse.
            </p>
          </CardContent>
        </Card>
      </main>
      <Separator className="my-8" />
      <footer className="w-full max-w-4xl mx-auto text-center py-8">
        <Button variant="outline">Learn More</Button>
      </footer>
    </div>
  );
};

export default Index;