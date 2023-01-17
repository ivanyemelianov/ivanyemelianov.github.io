void breakFromNestedFor();

int main() 
{
    breakFromNestedFor();

    for (int i = 1; i <= 10; ++i) {
        for (int j = 1; j <= 10; ++j)
        {
            break; //only breaks from one loop
        }
    }
}

void breakFromNestedFor()
{
    for (int i = 1; i <= 10; ++i) {
        for (int j = 1; j <= 10; ++j)
        {
            return; //Breaks from all loops
        }
    }
}
